console.log("My First Javascript");

let x,y,z;
x = 5;
y = 6;
z = x + y;
console.log(z);

//  Variables can be redeclared with var,, but not with let or const.
//  Redeclaring a variable with var can lead to unexpected behavior.
var carName = "Volvo";
var carName;
console.log(carName); // Outputs "Volvo"

//  Using let or const will result in an error if you try to redeclare the variable.
let fruit = "Apple";
// let fruit; // This will cause an error
console.log(fruit); // Outputs "Apple"
const pi = 3.14;
// const pi; // This will cause an error

// Note: If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let a = "5" + 2 + 3;
console.log(a);

// Note: If the first value is a number, the rest of the values will be treated as numbers, and added.
let b = 2 + 3 + "5";
console.log(b);

// Constant Arrays
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
console.log(cars);

// Constant Objects
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);


// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);

console.log(`Car type: ${car.type}, Car model: ${car.model}, Car color: ${car.color}, Car owner: ${car.owner}`);


// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("My father is " + myFather.firstName + " " + myFather.lastName + ".");
console.log("My mother is " + myMother.firstName + " " + myMother.lastName + ".");


// Display age
// document.getElementById("new").innerHTML = `My Father's name is ${myFather.fullName()}, My father is ${myFather.age} years old.`;
// document.getElementById("new2").innerHTML = `My mother's name is ${myMother.fullName()}, My mother is ${myMother.age} years old.`;

let text = "Hello World!";       // String
const text_array = [...text];
console.log(text_array);


// Largest of TWO Numbers
// Write a JavaScript program that displays the largest integer among two integers.

x = 1;
y = 2;

if (x > y) {
  console.log(`${x}`);
} else if (y > x) {
  console.log(`${y}`);
}else{
  console.log("Invalid input!");
}


rand_num = [3, 5, 7, 34, 2, 89, 2, 5, 90, 23];
console.log(Math.max(...rand_num));
console.log(Math.min(...rand_num));