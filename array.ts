let a: number[] = [1, 2, 3, 4, 5];

console.log(a[0]); // Output: 1
console.log(a[1]); // Output: 2
console.log(a[2]); // Output: 3
console.log(a[3]); // Output: 4
console.log(a[4]); // Output: 5     

// ------------------------------------

let b: string[] = ["Hello", "World", "TypeScript"];

console.log(b[0]); // Output: Hello
console.log(b[1]); // Output: World 

// ------------------------------------

let c: boolean[] = [true, false, true];
console.log(c[0]); // Output: true
console.log(c[1]); // Output: false
console.log(c[2]); // Output: true

// ------------------------------------

let mixed: (number | string)[] = [1, "Hello", 2, "World"];
console.log(mixed[0]); // Output: 1
console.log(mixed[1]); // Output: Hello
console.log(mixed[2]); // Output: 2
console.log(mixed[3]); // Output: World 

// PUSH method

let arr: number[] = [1, 2];

arr.push(3);

console.log(arr); // [1, 2, 3]

// POP method
let arr2: number[] = [1, 2, 3];
arr2.pop();

console.log(arr2); // [1, 2]

// LENGTH property
let arr3: number[] = [1, 2, 3, 4];
console.log(arr3.length); // Output: 4

// INDEXOF method
let arr4: string[] = ["apple", "banana", "cherry"];
console.log(arr4.indexOf("banana"));

// shift() : Removes first element.

let arr5: number[] = [1, 2, 3];
arr5.shift();
console.log(arr5); // [2, 3]

// unshift() : Adds new element at the beginning.
let arr6: number[] = [2, 3];
arr6.unshift(1);
console.log(arr6); // [1, 2, 3]

// slice() : Returns a portion of the array.
let arr7: number[] = [1, 2, 3, 4, 5];
let slicedArr: number[] = arr7.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]

// splice() : Adds/Removes elements from the array.
let arr8: number[] = [1, 2, 3, 4, 5];
arr8.splice(2, 1);
console.log(arr8); // [1, 2, 4, 5]

// forEach() : Executes a function for each array element.
let arr9: number[] = [1, 2, 3];
arr9.forEach((num) => 
{
    console.log(num * 2); // Output: 2, 4, 6
});

// map() : Creates a new array with the results of calling a function on every element.
let arr10: number[] = [1, 2, 3];
let mappedArr: number[] = arr10.map((num) => num * 2);
console.log(mappedArr); // [2, 4, 6]

// filter() : Creates a new array with all elements that pass the test implemented by the provided function.
let arr11: number[] = [1, 2, 3, 4, 5];
let filteredArr: number[] = arr11.filter((num) => num % 2 === 0);
console.log(filteredArr); // [2, 4]

// reduce() : Executes a reducer function on each element of the array, resulting in a single output value.
let arr12: number[] = [1, 2, 3, 4];
let sum: number = arr12.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

