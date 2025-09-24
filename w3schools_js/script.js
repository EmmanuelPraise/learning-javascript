document.getElementById("demo").innerHTML = "My First Javascript";

let txt = "<h1>Hello World!</h1>"; // String
document.getElementById("demo").innerHTML = txt;

function changeParagraphToLink() {
    document.getElementById("demo").innerHTML = "<a href='https://www.w3schools.com'>Paragraph changed.</a>";
}

function changeParagraphText() {
    document.getElementById("demo").innerText = "Paragraph Text changed.";
}

function updateInputField() {
    let value = document.getElementById("inputField").value;
    alert("Input field updated to: " + value);
    console.log("Input field value: " + value); 
}

function ageCheck() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("checkResult").style.color = "blue";
    document.getElementById("checkResult").style.fontSize = "14px";
    document.getElementById("checkResult").innerHTML = `You are ${age} years old, therefore you are ${voteable + " to vote"}`;
  }


function max_min() {
let rand_num = document.getElementById("rand_num").value.split(",").map(Number);
document.getElementById("maxResult").innerHTML = Math.max(...rand_num);
document.getElementById("minResult").innerHTML = Math.min(...rand_num);
}


function getGrade() {
  let score = Number(document.getElementById("score").value);
  let grade = "";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90){
    grade = "B";
  } else if (score >= 70 && score < 80){
    grade = "C";
  } else if (score >= 60 && score < 70){
    grade = "D";
  } else if (score >= 50 && score < 60){
    grade = "E";
  } else if (score >= 0 && score < 50){
    grade = "F";
  } else{
    grade = "Invalid score";
  }

  // console.log(typeof score);
  
  
  document.getElementById("grade").innerHTML = `Your grade is ${grade}.`;
}

function toggleBulb() {
  const cmd = "on"; //document.getElementById("cmd").value.toLowerCase();
  const bulbImg = document.getElementById("myImage");
  if (cmd === "on") {
    bulbImg.src = "/w3schools_js/img/pic_bulbon.gif";
  } else if (cmd === "off") {
    bulbImg.src = "/w3schools_js/img/pic_bulboff.gif";
}
}

toggleBulb()
