document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const cropModuleContainer = document.querySelector('.crop-module-container');
    const cropContainer = document.getElementById('crop-container');
    const cropButton = document.getElementById('crop-button');
    const pillowMockup = document.getElementById('pillow-3d-container');
    const sizeSelect = document.getElementById('size-select');
    const sizeMessage = document.getElementById('size-message');
    const webglStatus = document.getElementById('webgl-status');

    let croppieInstance = null;
    let scene, camera, renderer, pillowMesh; // Three.js variables

    // --- WebGL Initialization (Simulating pillow-3d-webgl) ---
    function initWebGL() {
        // Basic Setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0); // Light gray background
        
        // Camera (Perspective Camera)
        camera = new THREE.PerspectiveCamera(75, pillowMockup.clientWidth / pillowMockup.clientHeight, 0.1, 1000);
        camera.position.z = 1.5;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(pillowMockup.clientWidth, pillowMockup.clientHeight);
        pillowMockup.appendChild(renderer.domElement);

        // Lighting
        const light = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        // Initial 3D Pillow Object (A Simple Box)
        // The size corresponds to the default 1.0x1.0 ratio
        const geometry = new THREE.BoxGeometry(1.0, 1.0, 0.2); // Width, Height, Thickness
        const material = new THREE.MeshPhongMaterial({ color: 0xcccccc }); // Default gray material
        pillowMesh = new THREE.Mesh(geometry, material);
        scene.add(pillowMesh);
        
        // Animation Loop (required for rendering)
        function animate() {
            requestAnimationFrame(animate);
            // Simple rotation for effect
            pillowMesh.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate();
        
        webglStatus.textContent = '3D viewer ready. Upload an image to apply the texture.';
    }

    // --- Update Pillow Mesh Size in 3D Scene ---
    function updatePillowMeshSize(width, height) {
        if (pillowMesh) {
            // Remove the old mesh
            scene.remove(pillowMesh);

            // Create new geometry with updated size
            const geometry = new THREE.BoxGeometry(width, height, 0.2);
            
            // Retain the existing material or create a default one if needed
            const material = pillowMesh.material.clone();
            
            // Create the new mesh
            pillowMesh = new THREE.Mesh(geometry, material);
            scene.add(pillowMesh);
        }
    }


    // --- initSizeChangeHandler (.js-img-size from source) ---
    function updateMockupAndCropperSize(sizeValue) {
        // Size values are now ratios (e.g., 1.5x1.0)
        const [ratioW, ratioH] = sizeValue.split('x').map(Number);

        // 1. Update 3D Mesh Size (e.g., 1.0 units wide, 1.5 units tall)
        updatePillowMeshSize(ratioW, ratioH);
        
        sizeMessage.textContent = `Selected Ratio: ${ratioW}:${ratioH}.`;
        
        // 2. Update the Croppie Viewport to match the new ratio
        const newCroppieHeight = 250 / (ratioW / ratioH);
        
        if (croppieInstance) {
             const currentImagePromise = croppieInstance.result({ type: 'base64' });
             croppieInstance.destroy();

             // Re-initialize with the new aspect ratio
             croppieInstance = new Croppie(cropContainer, {
                viewport: { width: 250, height: newCroppieHeight, type: 'square' }, 
                boundary: { width: 300, height: newCroppieHeight + 50 }, // Give boundary some padding
                showZoomer: true,
                enableResize: true,
                enableOrientation: true
            });
            
            // Re-bind the current image
            currentImagePromise.then(uri => {
                if (uri && uri.startsWith('data:image')) {
                    croppieInstance.bind({ url: uri });
                }
            });
        }
    }

    // Initialize WebGL and Size Handler
    initWebGL();
    updateMockupAndCropperSize(sizeSelect.value);
    sizeSelect.addEventListener('change', (event) => {
        updateMockupAndCropperSize(event.target.value);
    });

    // --- FileUploadModule.init (Simulated) ---
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageURI = e.target.result;
                const [ratioW, ratioH] = sizeSelect.value.split('x').map(Number);
                const newCroppieHeight = 250 / (ratioW / ratioH);

                if (croppieInstance) croppieInstance.destroy();
                
                // Initialize Croppie with the correct ratio
                croppieInstance = new Croppie(cropContainer, {
                    viewport: { width: 250, height: newCroppieHeight, type: 'square' }, 
                    boundary: { width: 300, height: newCroppieHeight + 50 }, 
                    showZoomer: true,
                    enableResize: true,
                    enableOrientation: true
                });

                croppieInstance.bind({ url: imageURI });
                cropModuleContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            cropModuleContainer.style.display = 'none';
        }
    });


    // --- Apply Cropped Image as Texture ---
    cropButton.addEventListener('click', () => {
        if (!croppieInstance || !pillowMesh) return;

        // 1. Get the cropped image data
        croppieInstance.result({
            type: 'canvas',
            size: 'original', // Get full resolution of the cropped area
            format: 'jpeg',
            quality: 0.9 
        }).then((croppedImageURI) => {
            
            // 2. Load the image into a Three.js Texture Loader
            const loader = new THREE.TextureLoader();
            const texture = loader.load(croppedImageURI, function(texture) {
                // Once the texture is loaded, apply it to the front face of the box (pillow)

                // Create a new material array for all 6 faces of the box
                const materials = [
                    new THREE.MeshBasicMaterial({ color: 0xcccccc }), // Right (side)
                    new THREE.MeshBasicMaterial({ color: 0xcccccc }), // Left (side)
                    new THREE.MeshBasicMaterial({ color: 0xcccccc }), // Top (edge)
                    new THREE.MeshBasicMaterial({ color: 0xcccccc }), // Bottom (edge)
                    new THREE.MeshBasicMaterial({ map: texture }),     // Front (texture goes here)
                    new THREE.MeshBasicMaterial({ map: texture }),     // Back (texture goes here)
                ];
                
                // Apply the new material to the pillow mesh
                pillowMesh.material = materials;
                
                // Force scene to re-render
                pillowMesh.material.needsUpdate = true;
                webglStatus.textContent = 'Texture applied successfully! Rotating 3D Pillow.';
            });
        });
    });

});