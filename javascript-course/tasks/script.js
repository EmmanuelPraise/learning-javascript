// TASK 1
let hideTimeout;

const saved = document.getElementById("notification");

function showNotification() {
    saved.style.opacity = 1;

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
        saved.style.opacity = 0
    }, 3000);

}

// TASK 2
const inputField = document.getElementById("textInput");
const status = document.getElementById("status");

let typingTimer;

inputField.addEventListener("input", () => {
    status.style.opacity = 1;

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        status.style.opacity = 0;
    }, 2000);
});

// TASK 3

// TASK 4
let heartOn = false;

    function toggleHeart() {
      const heartImg = document.getElementById("heart");

      if (!heartOn) {
        heartImg.src = "/javascript-course/tasks/heart (1).png";
        heartOn = true;
      } else {
        heartImg.src = "/javascript-course/tasks/heart.png";
        heartOn = false;
      }
    }
     
// TASK 5
