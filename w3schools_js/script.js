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