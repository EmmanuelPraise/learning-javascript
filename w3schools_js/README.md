# Javascript

Learning JavaScript based on the tutorial in [w3schools.com](https://www.w3schools.com/js/)

JavaScript is the programming language of the web.

- It can update and change both HTML and CSS.
- It can calculate, manipulate and validate data.

JavaScript is one of the 3 languages all web developers must learn:

1. HTML to define the content of web pages
2. CSS to specify the layout of web pages
3. JavaScript to program the behavior of web pages

JavaScript Display Possibilities
JavaScript can "display" data in different ways:

- Writing into an HTML element, using innerHTML or innerText.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

Note:

- Use innerHTML when you want to change an HTML element.
- Use innerText when you only want to change the plain text.

## JavaScript Statements

JavaScript statements are composed of:
Values, Operators, Expressions, Keywords, and Comment

**JavaScript Values**
The JavaScript syntax defines two types of values:

- Fixed values
- Variable values
Fixed values are called *Literals*.
Variable values are called *Variables*.

**JavaScript Variables**
In a programming language, variables are used to store data values.
JavaScript uses the keywords var, let and const to declare variables.

```javascript
let x;
x = 6;
```

**JavaScript Operators**
JavaScript uses arithmetic operators ( + - * / ) to compute values:

```javascript
(5 + 6) * 10
```

JavaScript uses an assignment operator ( = ) to assign values to variables:

```javascript
let x, y;
x = 5;
y = 6;
```

Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

- Automatically (They are accessible globally)
- Using var
- Using let
- Using const

## Automatic Declaration

```javascript
function example() {
    x = 10; // Automatically declared as a global variable
    console.log(x); // 10
}

example();
console.log(x); // 10 (accessible globally)
```

Note: It is considered good programming practice to always declare variables before use.

Var

- The var keyword was used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- The var keyword should only be used in code written for older browsers.

```javascript
// Var
var x = 5;
var y = 6;
var z = x + y;

// Let
let x = 5;
let y = 6;
let z = x + y;

// Const
const x = 5;
const y = 6;
const z = x + y;
```

When to Use var, let, or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

Note: Variables are containers for storing values.

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
Note: JavaScript identifiers are case-sensitive.

```javascript
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
```

The process of adding Strings will be concatination:

```javascript
let x = "John" + " " + "Doe";
console.log(x);
```

Note: If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

```javascript
let x = "5" + 2 + 3;
console.log(x);
```

Note: If the first value is a number, the rest of the values will be treated as numbers, and added.

```javascript
let y = 2 + 3 + "5";
console.log(y);
```

Difference Between var, let and const

|  | Scope | Redeclare | Reassign | Hoisted | Binds this |
| - | - | - | - | - | - |
| var |No |Yes | Yes | Yes | Yes |
| let | Yes | No | Yes | No | No |
| const | Yes | No | No | No | No |

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp

Constant Objects and Arrays
The keyword const is a little misleading.
It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:

- Change the elements of constant array
- Change the properties of constant object

```javascript
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
console.log(cars);
```

```javascript
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

## JavaScript Data Types

JavaScript has 8 Datatypes
A JavaScript variable can hold 8 types of data:

|Type | Description |
| - | - |
| String | Text |
| String | A text of characters enclosed in quotes |
| Number | A number representing a mathematical value |
| Bigint | A number representing a large integer |
| Boolean | A data type representing true or false |
| Object | A collection of key-value pairs of data |
| Undefined | A primitive variable with no assigned value |
| Null | A primitive value representing object absence |
| Symbol | A unique and primitive identifier |

Examples

```javascript
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();
```

## The typeof Operator

You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

```javascript
let xy = 1234567890123456789012345n;  
console.log(typeof xy);  // bigint

const x1 = Symbol("x");
const y1 = Symbol("y");
console.log(typeof x1);  // symbol

console.log(typeof "John");  // string
console.log(typeof 3.14);  // number
console.log(typeof true);  // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);  // object
```

Javascript operators are used to perform different types of mathematical and logical computations.

Examples:
The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values

Types of JavaScript Operators
There are different types of JavaScript operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. String Operators
5. Logical Operators
6. Bitwise Operators
7. Ternary Operators
8. Type Operators

## JavaScript Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

| Operator | Description |
| - | - |
| + |Addition |
| - | Subtraction |
| * | Multiplication |
| ** | Exponentiation (ES2016) |
| / | Division |
| % | Modulus (Remainder) |
| ++ |Increment |
| -- | Decrement |

### Operators and Operands

The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

| Operand | Operator | Operand |
|100 | + | 50 |

## JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.
Operators `=,  +=,  -=,  *=,  **=,  /=,  %=,  :`

**The Spread (...) Operator**
The ... operator splits iterables into individual elements.

Example

```javascript
let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
```

## Javasript Comparison Operators

Comparison operators are used to compare two values.

Comparison operators always return true or false.

| Operator | Description | Example |
| - | - | - |
| == | Equal to | x == y |
| != | Not equal to | x != y |
| === | Strictly equal to | x === y |
| !== | Strictly not equal to | x !== y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| <= | Less than or equal to | x <= y |

```javascript
b =  3
c = "3"

// Compares the two variables but not the type
console.log(b == c);  // true

// Compares the two variables and the type
console.log(b === c);  // false

```

## Conditional Statements

When you write code, you often want to perform different actions for different conditions.

Conditional statements run different code depending on a true or false condition.

Conditional statements include:

1. if
2. if...else
3. if...else if...else
4. switch
5. ternary (? :)

### When to use Conditionals

1. Use `if` to specify a code block to be executed, if a specified condition is `true`
2. Use `else` to specify a code block to be executed, if the same condition is `false`
3. Use `else if` to specify a new condition to test, if the first condition is `false`
4. Use `switch` to specify many alternative code blocks to be executed
5. Use `(? :)` (ternary) as a shorthand for `if...else`

### The if Statement

Use `if` to specify a code block to be executed, if a specified condition is `true`.

Syntax

```javascript
if (condition) {
  // code to execute if the condition is true
}
```

Example
Make a "Good day" greeting if the hour is less than 18:00:

```javascript
let hour = 19;
let greeting;
if (hour < 18) {
  greeting = "Good day";
}
```

### The else Statement

Use else to specify a code block to be executed, if the same condition is false.

Syntax

```javascript
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
```

Example
If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

```javascript
let hour = 19;
let greeting;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### The else if Statement

Use else if to specify a new condition to test, if the first condition is false.

Syntax

```javascript
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}
```

Example
If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

```javascript
let time = 20;
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### The switch Statement

Based on a condition, switch selects one or more code blocks to be executed.

switch executes the code blocks that matches an expression.

switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

Use switch to specify many alternative code blocks to be executed.

Syntax

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, no code is executed.

```javascript
Example
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
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
    break;
  default:
    day = "Looking forward to the Weekend";
}
```

Note: The break keyword is crucial for preventing a "fall-through."

Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

### The default keyword

The default keyword specifies a block of code to run if there is no case match.

The default keyword is optional.

The default can act as a fallback:

### Ternary Operator (? :)

Use `(? :)` (ternary) as a shorthand for `if...else`.

Example
`condition ? expression1 : expression2`

```javascript
let time = 20;
let greeting = time < 18 ? "Good day" : "Good evening";

// If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":

let age = 19;
let text = (age < 18) ? "Adult" : "Minor";
```

### The Boolean Data Type

In JavaScript, a Boolean is a primitive data type that can only have one of two values:

`true` or `false`

The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

## JavaScript Loops

Loops can be used to execute a block of code a number of times.

### The For Loop

The for statement creates a loop with 3 optional expressions:

```javascript
for (statement1; statement2; statement3) {
  // code block to be executed
}
```

- exp1 is executed one time before the execution of the code block.
- exp2 defines the condition for executing the code block.
- exp3 is executed every time the code block has been executed.

Example

```javascript
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// ----------------------
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i] + "<br>";
}

console.log(text);
```

### The While Loop

The while loop loops through a block of code as long as a specified condition is true.

Syntax

```javascript
while (condition) {
  // code block to be executed
}

let text = "";

let i = 0;
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

Note: If you forget to increase the variable used in the condition, the loop will never end, This will crash your browser.

### The Do While Loop

The do while loop is a variant of the while loop.

The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax

```javascript
do {
// code block to be executed
}
while (condition);
```

Note: The `do while` loop will always be executed at least once, even if the condition is false from the start.

This is because the code block is executed before the condition is tested:

Example

```javascript
let text = "";

let i = 0;
do {
  text += `The number is ${i}\n`;
  i++;
}
while (i < 10);

console.log(text);
```

Note: Do not forget to increase the variable used in the condition, otherwise the loop will never end!

### The Break Statement

The break statement "jumps out" of loops and switches.

The break statement terminates the execution of a loop or a switch statement.

### JavaScript Labels

A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.

Syntax
A label is an identifier followed by a colon (:).
`labelname: statement;`

A label precedes a statement or a block of code.

```javascript
labelname: {
  statements
}
```

Labeled Break
Syntax
`break labelname;`
