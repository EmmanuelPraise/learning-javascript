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

Example

The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

```javascript
let day;
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

console.log(day);
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

// ----------------------
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text += i + "<br>";
  }
}

console.log(text);
```

Labeled Break
Syntax
`break labelname;`

### The Continue Statement

The continue statement skips the current iteration in a loop.
The remaining code in the iteration is skipped and processing moves to the next iteration.

Note: break and continue are the only JavaScript statements that can "jump out of" a code block.

## JavaScript Strings

Strings are for storing text
Strings are written with quotes either single quote or double quote.

```javascript
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
```

Note: Strings created with single or double quotes work the same. There is no difference between the two.

### Quotes Inside Quotes

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

Example

```javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

## Template Strings

Templates are strings enclosed in backticks (`This is a template string`).

Templates allow single and double quotes inside a string:

Example

```javascript
let text = `He's often called "Johnny"`;
console.log(text);
```

### String Length

To find the length of a string, use the built-in length property:

Example

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
```

### Escape Characters in JavaScript

| Code | Result | Description |
| - | - | - |
| \' | ' | Single quote |
| \" | " |Double quote |
| \\ | \ |Backslash |
| \n | \n | New line |
| \r | \r | Carriage return |
| \t | \t | Horizontal Tabulator |
| \v | \v | Vertical Tabulator |
| \b | \b |Backspace |
| \f |\f | Form feed |

Note: The last 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

Comparing two JavaScript objects always returns false.

### JavaScript String Methods

Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

### String length

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
```

String concatenation

### Extracting String Characters

There are 4 methods for extracting string characters:

1. The at(position) Method
The at() method returns the character at a specified index (position) in a string.

Note: The at() method is a new addition to JavaScript.
It allows the use of negative indexes while charAt() do not.
Now you can use myString.at(-2) instead of charAt(myString.length-2)

2. The charAt(position) Method
The charAt() method returns the character at a specified index (position) in a string:

Example

```javascript
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char)  // returns H
```

3. The charCodeAt(position) Method
The charCodeAt() method returns the code of the character at a specified index in a string:
The method returns a UTF-16 code (an integer between 0 and 65535).

```javascript
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char);  // returns 72
```

4. Using property access [] like in arrays
Example

```javascript
let text = "HELLO WORLD";
let char = text[0];
console.log(char)  // returns H
```

String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

## JavaScript Numbers

JavaScript has only one type of number. Numbers can be written with or without decimals.

```javascript
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

Extra large or extra small numbers can be written with scientific (exponent) notation:

Example

```javascript
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```

Javascript numbers are always double (64-bit floating point).

### Integer Precision

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Example

```javaScript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000

console.log(x)
console.log(y)
```

The maximum number of decimals is 17.

### Floating Precision

Floating point arithmetic is not always 100% accurate:

```javascript
let x = 0.2 + 0.1;
console.log(x);  // 0.3000000000000000

// To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);  // 0.3
```

**WARNING !!**
JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.

JavaScript will try to convert strings to numbers in all numeric operations:

```javascript
let x = "100";
let y = "10";
let z = x / y;

console.log(z);  // 10

let w = x + y;
console.log(w);  // 10010

let v = x + y;
console.log(v);  // 110

let w = x * y;
console.log(w);  // 1000

let j = x - y;
console.log(j);  // 90
```

### NaN - Not a Number

NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example

```javascript
let x = 100 / "Apple";
console.log(x);  // NaN
```

However, if the string is numeric, the result will be a number:

Example

```javascript
let x = 100 / "10";
console.log(x);  // 10
```

`Note: Comparing two JavaScript objects always returns false.`

### JavaScript Number Methods

**Basic Methods**
Basic number methods can be used on any number:

1. The toString() Method
The `toString()` method returns a number as a string.

Example

```javascript
let x = 123;
let y = x.toString();
console.log(y)
```

The `toString()` method can take an optional radix argument to convert the number to a different base:

Example

```javascript
let x = 123;
let y = x.toString(2);  // Convert to binary
console.log(y)  // 1111011
```

2. The toExponential() Method
`toExponential()` returns a string, with a number rounded and written using exponential notation.
A parameter defines the number of characters behind the decimal point:

Example

```javascript 
let x = 9.656;
let y = x.toExponential(2);
console.log(y);  // 9.66e+00
```

The parameter is optional. If you don't specify it, JavaScript will not round the number.

3. The toFixed() Method
`toFixed()` returns a string, with the number written with a specified number of decimals:

Example

```javascript
let x = 9.656;

console.log(x.toFixed(0));  // 10
console.log(x.toFixed(2));  // 9.66 // It's perfect for working with money.
console.log(x.toFixed(4));  // 9.6560
console.log(x.toFixed(6));  // 9.656000
```

4. The toPrecision() Method
`toPrecision()` returns a string, with a number written with a specified length:

Example

```javaScript
let x = 9.656;
console.log(y = x.toPrecision());
console.log(x.toPrecision(2));
```

5. The valueOf() Method
`valueOf()` returns a number as a number.

Example

```javascript
let x = 123;
console.log(x.valueOf());
```

### Static Methods

Static methods can only be used on Number:

Number.isFinite()
Number.isInteger()
Number.isNan()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat()

Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

| Method | Description |
| - | - |
|Number() | Returns a number converted from its argument. |
| parseFloat() | Parses its argument and returns a floating point number |
| parseInt() | Parses its argument and returns a whole number |

### Number Object Methods

These object methods belong to the Number object:

| Method | Description |
| - | - |
| Number.isInteger() | Returns true if the argument is an integer |
| Number.isNaN() | Returns true if the argument is NaN |
| Number.isFinite() | Returns true if the argument is not Infinity nor NaN |
| Number.isSafeInteger() | Returns true if the argument is a safe integer |
| Number.parseFloat() | Converts a string to a number |
| Number.parseInt()| Converts a string to a whole number |

Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object. These methods can only be accessed like Number.isInteger().
Using X.isInteger() where X is a variable, will result in an error:
TypeError X.isInteger is not a function.

### JavaScript BigInt

JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number. JavaScript integers are only accurate up to 15 digits

To create a BigInt, append n to the end of an integer or call BigInt():

Example

```javascript
let x = 123456789012345678901234567890n;
let y = BigInt("123456789012345678901234567890");

console.log(x,y)
```

BigInt is the second numeric data type in JavaScript (after Number). With BigInt the total number of supported data types in JavaScript is 8:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

BigInt (does not have a fixed width)

## JavaScript Functions

What are Functions?
Functions are fundamental building blocks in all programming. Functions enable better code organization, modularity, and efficiency.

Functions are reusable block of code designed to perform a particular task. Functions execute when they are "called" or "invoked".

JavaScript Function Syntax

```javascript
function FunctionName(parameter1, parameter2, ...) {
  // code to be executed
}

FunctionName(argument1, argument2, ...);
```

**Example**
Function to compute the product of two numbers:

```javascript
function myFunction(p1, p2) {
  return p1 * p2;
}
```

### Function Invocation ()

The code inside the function will execute when "something" invokes (calls) the function:

- When it is invoked (called) from JavaScript code
- When an event occurs (a user clicks a button)
- Automatically (self invoked)
The () operator invokes (calls) the function:

Example
Convert Fahrenheit to Celsius:

```javascript
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
console.log(value);
```

JavaScript Objects
An Object is a variable that can hold many variables. Objects are collections of key-value pairs, where each key (known as property names) has a value. Objects can describe anything like houses, cars, people, animals, or any other subjects.

```javascript
const car = {type:"Fiat", model:"500", color:"white"};
```
