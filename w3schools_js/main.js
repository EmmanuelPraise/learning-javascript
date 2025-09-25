// console.log("My First Javascript");

let x, y, z;
x = 5;
y = 6;
z = x + y;
// console.log(z);

//  Variables can be redeclared with var,, but not with let or const.
//  Redeclaring a variable with var can lead to unexpected behavior.
var carName = "Volvo";
var carName;
// console.log(carName); // Outputs "Volvo"

//  Using let or const will result in an error if you try to redeclare the variable.
let fruit = "Apple";
// let fruit; // This will cause an error
// console.log(fruit); // Outputs "Apple"
const pi = 3.14;
// const pi; // This will cause an error

// Note: If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let a = "5" + 2 + 3;
// console.log(a);

// Note: If the first value is a number, the rest of the values will be treated as numbers, and added.
let b = 2 + 3 + "5";
// console.log(b);

// Constant Arrays
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
// console.log(cars);

// Constant Objects
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car);


// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
// console.log(car);

// console.log(`Car type: ${car.type}, Car model: ${car.model}, Car color: ${car.color}, Car owner: ${car.owner}`);


// Constructor Function for Person objects
function Person(first, first, age, eye) {
  this.firstName = first;
  this.firstName = first;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + " " + this.firstName;
  };
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
// console.log("My father is " + myFather.firstName + " " + myFather.firstName + ".");
// console.log("My mother is " + myMother.firstName + " " + myMother.firstName + ".");


// Display age
// document.getElementById("new").innerHTML = `My Father's name is ${myFather.fullName()}, My father is ${myFather.age} years old.`;
// document.getElementById("new2").innerHTML = `My mother's name is ${myMother.fullName()}, My mother is ${myMother.age} years old.`;

let text = "Hello World!";       // String
const text_array = [...text];
// console.log(text_array);


// Largest of TWO Numbers
// Write a JavaScript program that displays the largest integer among two integers.

x = 1;
y = 2;

// if (x > y) {
//   console.log(`${x}`);
// } else if (y > x) {
//   console.log(`${y}`);
// }else{
//   console.log("Invalid input!");
// }


rand_num = [3, 5, 7, 34, 2, 89, 2, 5, 90, 23];
// console.log(Math.max(...rand_num));
// console.log(Math.min(...rand_num));

let xy = 1234567890123456789012345n;
// console.log(typeof xy);  // bigint

const x1 = Symbol("x");
const y1 = Symbol("y");
// console.log(typeof x1);  // symbol

let sex = "male";
let gender = (sex == "male") ? "boy" : "girl";
// console.log(gender);

let day;
// day = prompt("Enter a number between 0 and 6:");
let date = new Date().getDay();
// console.log(date);  // Returns the current day as a number (0-6)

// Use the switch statement to select the day:
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// console.log(`Today is ${day}.`);

// Grade based on score
// Write a JavaScript program that takes a score input between 0 and 100 and displays the corresponding grade based on the following criteria:
// Score  Grade
// 90-100  A
// 80-89   B
// 70-79   C
// 60-69   D
// 50-59   E
// 0-49    F
let score = 70;
let grade;
switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A";
    break;
  case (score >= 80 && score < 90):
    grade = "B";
    break;
  case (score >= 70 && score < 80):
    grade = "C";
    break;
  case (score >= 60 && score < 70):
    grade = "D";
    break;
  case (score >= 50 && score < 60):
    grade = "E";
    break;
  default:
    grade = "F";
    break;
}

// console.log(`Your grade is ${grade}.`);

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else if (score >= 50 && score < 60) {
  grade = "E";
} else if (score >= 0 && score < 50) {
  grade = "F";
} else {
  grade = "Invalid score";
}

// console.log(`Your grade is ${grade}.`);


let bulbOn = false;

if (bulbOn != true) {
  // console.log("Bulb is off")
  bulbOn = false
} else if (bulbOn) {
  // console.log("Bulb is on");
  bulbOn = true
}


// let i;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = -1; i >= -5; i--) {
  // console.log(i);
}

for (let i = 1; i <= 5; i++) {
  // console.log(i);
}


// For loop that increments by 2
let i;
for (i = 0; i < 10; i += 2) {
  // console.log(`Looping ${i}`);
}

const car_brands = ["volvo", "mazda", "toyota", "lexus", "ferarri", "bugatti"]
// console.log(car_brands);

let car_brand_list = "";
for (let i = 0; i < car_brands.length; i++) {
  car_brand_list += `${car_brands[i]}\n`
}
// console.log(car_brand_list);

let text2 = "";

let j = 1;
while (j <= 10) {
  text2 += `The number is ${j}\n`;
  j++;
}
// console.log(text2);

let text3 = "";

let ij = 0;
do {
  text3 += `The number is ${ij}\n`;
  ij++;
}
while (ij < 10);

// console.log(text3);


a = 1;
while (true) {
  // console.log(a);

  if (a >= 20) {
    break;
  }

  a++;
}

let bc = 3
let cd = "3"

// console.log(bc == cd);
// console.log(bc === cd);

let fruit_ = "Apple";
// console.log(fruit_.slice(0, 4));

for (let i = 1; i <= 12; i++) {
  // console.log(`--- Table ${i} ---`);
  for (let j = 1; j <= 12; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

function fullName() {
  let fullName = "Emmanuel Ayelabola";

  fullName = fullName.trim().split(" ");
  let firstName = fullName[0];
  let lastName = fullName[1];

  // console.log(`Hi ${firstName}.`);
}

// fullName()

let symbol_ = "*";

for (let i = 1; i <= 5; i++) {
  // console.log(symbol_.repeat(i));
}

// Print a 5 by 5 square of asterisks
let square = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    square += "*";
  }
  square += "\n";
}
// console.log(square);

let xyz = 999_999_999_999_999_999
// console.log(xyz);
// console.log(typeof xyz);

// let x = "100";
// let y = "10";
// let z = x / y;

// console.log(z);  // 10

// let w = x + y;
// console.log(w);  // 10010

// let b = x * y;
// console.log(b);  // 1000

// let j = x - y;
// console.log(j);  // 90

function arrayReverse(array) {
  const emptyArray = []
  for (let i = -1; i >= -array.length; i--) {
    emptyArray.push(array.at(i));
  }

  console.log(emptyArray);
}

// arrayReverse([1,2,3,4,5,6,7])

function swapFirstNlast(array) {
  let last = array[0];
  last = array.at(-1);

  let first = array[array.length - 1];
  first = array.at(-array.length);

  array[0] = last
  array[array.length - 1] = first
  console.log(array);
}

// swapFirstNlast([1, 3, 4, 5])

let hrgfdgf = 500;
let sannfjje = Number(500);
let ueyruje = new Number(500);
// console.log(typeof sannfjje);
// console.log(typeof ueyruje);

// console.log(sannfjje == ueyruje);
// console.log(sannfjje === ueyruje);

// console.log(sannfjje == hrgfdgf);
// console.log(sannfjje === hrgfdgf);

let xu = 9.656;

// console.log(xu.toFixed());  // 10
// console.log(xu.toFixed(0));  // 10
// console.log(xu.toFixed(2));  // 9.66
// console.log(xu.toFixed(4));  // 9.6560
// console.log(xu.toFixed(6));  // 9.656000
