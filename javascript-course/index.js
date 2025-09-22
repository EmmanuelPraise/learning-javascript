console.log('Happy developing ✨')

// Lesson 1 Exercises - Javascript Basics
// alert("Good Morning!");
// alert("Hi, Emmanuel!");
// console.log(10 + 5);
// console.log(20 - 5);
// console.log(2 + 2 - 5);

// document.body.innerHTML = "Hello World!";

// let t_shirt = 10;
// let socks = 8;
// let plates = 20;
//
// let total_cost = t_shirt + socks + plates;
// console.log("Your Order:\nT-Shirt: $"+t_shirt+ "\nSocks: $"+ socks + "\nPlates: $" + plates +"\nTotal Cost: $"+ total_cost);

let soup = 10;
let burger = 8;
let ice_cream = 5;

let soup_qty = 1, burger_qty = 3, ice_cream_qty = 5;

let total = (soup * soup_qty) + (burger * burger_qty) + (ice_cream * ice_cream_qty);

console.log(`Total order = $${total}`);

let order_quantity = 3;
let order =  total * order_quantity;
let pay_per_person = order / order_quantity

console.log(`Each person is to pay: $${pay_per_person}`);

let toaster$ = 18.50;
let shirt$ = 7.50;

let toaster_qty = 1;
let shirt_qty = 2;

let total_cost = (toaster$ * toaster_qty) + (shirt$ * shirt_qty);
console.log(`Total Cost = $${total_cost}`);

let ten_percent_tax = 10/100;
console.log(`10% Tax = $${total_cost * ten_percent_tax}`);

let twenty_percent_tax = 20/100;
console.log(`20% Tax = $${total_cost * twenty_percent_tax}`);


