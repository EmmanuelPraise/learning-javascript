document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const cropContainerHidden = document.getElementById('crop-container-hidden');
    const pillowMockup = document.getElementById('pillow-3d-container');
    const sizeSelect = document.getElementById('size-select');
    const sizeMessage = document.getElementById('size-message');
    const webglStatus = document.getElementById('webgl-status');
  
    let croppieInstance = null;
    let scene, camera, renderer, pillowMesh, controls;
    let currentImageURI = null;
  
    /* 1️⃣ Initialize 3D Scene */
    function initWebGL() {
      if (renderer) return;
  
      const width = pillowMockup.clientWidth;
      const height = pillowMockup.clientHeight;
  
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0);
  
      const aspect = width / height;
      const frustumSize = 2;
      camera = new THREE.OrthographicCamera(
        (frustumSize * aspect) / -2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        frustumSize / -2,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      pillowMockup.innerHTML = '';
      pillowMockup.appendChild(renderer.domElement);
  
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 2;
      controls.maxDistance = 10;
  
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(1, 1, 1);
      scene.add(ambientLight, directionalLight);
  
      // Default flat pillow mesh
      const geometry = new THREE.BoxGeometry(1, 1, 0.2);
      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
      pillowMesh = new THREE.Mesh(geometry, material);
      scene.add(pillowMesh);
  
      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
  
      webglStatus.textContent = '3D viewer ready.';
    }
  
    /* 2️⃣ Pillow Resizing */
    function updatePillowMeshSize(ratioW, ratioH) {
      if (!scene) return;
      scene.remove(pillowMesh);
      const geometry = new THREE.BoxGeometry(ratioW, ratioH, 0.2);
      const material = pillowMesh.material.clone();
      pillowMesh = new THREE.Mesh(geometry, material);
      scene.add(pillowMesh);
    }
  
    /* 3️⃣ Handle Pillow Ratio & Cropping */
    function updatePillowAndCrop(sizeValue) {
      const [ratioW, ratioH] = sizeValue.split('x').map(Number);
      sizeMessage.textContent = `Current Ratio: ${ratioW}:${ratioH}`;
      updatePillowMeshSize(ratioW, ratioH);
  
      if (currentImageURI) {
        if (croppieInstance) croppieInstance.destroy();
  
        const ratio = ratioW / ratioH;
        croppieInstance = new Croppie(cropContainerHidden, {
          viewport: { width: 250, height: 250 / ratio, type: 'square' },
          boundary: { width: 300, height: 300 / ratio },
          showZoomer: false,
        });
  
        croppieInstance.bind({ url: currentImageURI }).then(() => {
          removeBackgroundAndApplyTexture(ratio);
        });
      }
    }
  
    /* 4️⃣ Remove Background + Apply Texture */
    async function removeBackgroundAndApplyTexture(ratio) {
      webglStatus.textContent = 'Removing background... (This may take a few seconds)';
      const croppieCanvasURI = await croppieInstance.result({
        type: 'canvas',
        size: { width: 800 * ratio, height: 800 },
        format: 'png',
        quality: 0.9,
      });
  
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = croppieCanvasURI;
  
        img.onload = async () => {
          // Remove background using imgly/background-removal
          const resultBlob = await removeBackground(img);
          const cleanURL = URL.createObjectURL(resultBlob);
  
          const loader = new THREE.TextureLoader();
          loader.load(cleanURL, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
  
            const materialFront = new THREE.MeshPhongMaterial({
              map: texture,
              transparent: true,
            });
  
            const materialSide = new THREE.MeshPhongMaterial({ color: 0x555555 });
  
            pillowMesh.material = [
              materialSide, materialSide, materialSide, materialSide,
              materialFront, materialFront,
            ];
            pillowMesh.material.needsUpdate = true;
            webglStatus.textContent = '✅ Background removed and texture applied.';
          });
        };
      } catch (err) {
        console.error(err);
        webglStatus.textContent = '❌ Background removal failed.';
      }
    }
  
    /* 5️⃣ File Upload */
    imageUpload.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (e) => {
        currentImageURI = e.target.result;
        imageUpload.value = ''; // reset input
        updatePillowAndCrop(sizeSelect.value);
      };
      reader.readAsDataURL(file);
    });
  
    /* 6️⃣ Ratio Change */
    sizeSelect.addEventListener('change', (e) => {
      if (currentImageURI) {
        updatePillowAndCrop(e.target.value);
      } else {
        const [w, h] = e.target.value.split('x').map(Number);
        updatePillowMeshSize(w, h);
        sizeMessage.textContent = `Current Ratio: ${w}:${h}`;
      }
    });
  
    /* Init */
    initWebGL();
  });
  