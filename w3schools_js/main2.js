// button = true
// clicked = false

// if (button ==  true && clicked == true){
//     button = false
//     console.log("Bulb is switched off");
// }
// else if(button == false && clicked == true){
//     button = true
//     console.log("Bulb is switched on");
// } else if(button == true && clicked == false){
//     console.log("Bulb is on, No operation carried out!");
// } else if (button == false && clicked == false){
//     console.log("Bulb is off, No operation carried out!");

// }
// onclick switch on
// button = on

const letters = new Set(["a", "b", "c"]); // Create a Set
letters.add("d"); // Add new items to the Set
letters.add("e");
letters.add("f");
// console.log(letters); // Output: Set(6) {"a", "b", "c", "d", "e", "f"}

letters.delete("c");

for (const x of letters) {
  // console.log(x);
}

// console.log(typeof letters) // object
// console.log( letters instanceof Set) // true

// console.log(letters.size); // 5;

// console.log(letters.has("a")); // true

// console.log(letters.has("z")); // false

let text = "";

letters.forEach(letter => {
  return text += letter + ", ";
});

// console.log(text);

// console.log(letters.values());

// console.log(letters.keys());

// console.log(letters.entries());



const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers);

for (const n of numbers) {
  //  console.log(n);
}

// const person = {name: "John", age: 30, city: "New York"};

// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.union(B);
// console.log(C)

const D = A.intersection(B);
// console.log(D);

const E = A.difference(B);
// console.log(E);

const F = A.symmetricDifference(B);
// console.log(F);

const G = A.isSubsetOf(B);
// console.log(G);

const H = A.isSupersetOf(B);
// console.log(H);

const I = A.isDisjointFrom(B);
// console.log(I);


function countdown() {
  let count = 5;

  const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}

// countdown();

// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let myObj = { fname: "John", lname: "Doe" };

// Add the Object
mySet.add(myObj);

// Do I have myObj in the mySet?
let answer = mySet.has(myObj);
// console.log(`Do I have myObj in the mySet? ${answer}`);

// console.log(mySet);

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits); // Map(3) {"apples" => 500, "bananas" => 300, "oranges" => 200}

fruits.set("grapes", 400);      
fruits.set("pineapples", 600);

console.log(fruits); // Map(5) {"apples" => 500, "bananas" => 300, "oranges" => 200, "grapes" => 400, "pineapples" => 600}

fruits.set("apples", 200);

console.log(fruits); // Map(5) {"apples" => 200, "bananas" => 300, "oranges" => 200, "grapes" => 400, "pineapples" => 600}

console.log(fruits.get("apples"));    // Returns 200