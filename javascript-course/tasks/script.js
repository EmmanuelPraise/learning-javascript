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
const codeBtn = document.getElementById("code");

codeBtn.addEventListener("click", () => {
  codeBtn.disabled = true;

  let count = 10;
  codeBtn.innerText = `Resend code in ${count}s...`;

  const timer = setInterval(() => {
    count--;
    codeBtn.innerText = `Resend code in ${count}s...`;

    if (count === 0) {
      clearInterval(timer);
      codeBtn.innerText = "Send Code";
      codeBtn.disabled = false;
    }
  }, 1000);
});

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
const alertBox = document.getElementById("alert");
const submitBtn = document.getElementById("submit");
let hideTimeout_;

function showAlert() {
  alertBox.style.opacity = 1;

  clearTimeout(hideTimeout_);

  hideTimeout_ = setTimeout(() => {
    alertBox.style.opacity = 0;
  }, 4000);
}

alertBox.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout_);
});

alertBox.addEventListener("mouseleave", () => {
  hideTimeout_ = setTimeout(() => {
    alertBox.style.opacity = 0;
  }, 2000);
});

submitBtn.addEventListener("click", showAlert);

