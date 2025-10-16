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

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C)

const D = A.intersection(B);
console.log(D);

const E = A.difference(B);
console.log(E);

const F = A.symmetricDifference(B);
console.log(F);

const G = A.isSubsetOf(B);
console.log(G);

const H = A.isSupersetOf(B);
console.log(H);

const I = A.isDisjoint(B);
console.log(I);
