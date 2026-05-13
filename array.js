var a = [1, 2, 3, 4, 5];
console.log(a[0]); // Output: 1
console.log(a[1]); // Output: 2
console.log(a[2]); // Output: 3
console.log(a[3]); // Output: 4
console.log(a[4]); // Output: 5     
// ------------------------------------
var b = ["Hello", "World", "TypeScript"];
console.log(b[0]); // Output: Hello
console.log(b[1]); // Output: World 
// ------------------------------------
var c = [true, false, true];
console.log(c[0]); // Output: true
console.log(c[1]); // Output: false
console.log(c[2]); // Output: true
// ------------------------------------
var mixed = [1, "Hello", 2, "World"];
console.log(mixed[0]); // Output: 1
console.log(mixed[1]); // Output: Hello
console.log(mixed[2]); // Output: 2
console.log(mixed[3]); // Output: World 
// PUSH method
var arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
// POP method
var arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]
// LENGTH property
var arr3 = [1, 2, 3, 4];
console.log(arr3.length); // Output: 4
// INDEXOF method
var arr4 = ["apple", "banana", "cherry"];
console.log(arr4.indexOf("banana"));
// shift() : Removes first element.
var arr5 = [1, 2, 3];
arr5.shift();
console.log(arr5); // [2, 3]
// unshift() : Adds new element at the beginning.
var arr6 = [2, 3];
arr6.unshift(1);
console.log(arr6); // [1, 2, 3]
// slice() : Returns a portion of the array.
var arr7 = [1, 2, 3, 4, 5];
var slicedArr = arr7.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]
// splice() : Adds/Removes elements from the array.
var arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1);
console.log(arr8); // [1, 2, 4, 5]
// forEach() : Executes a function for each array element.
var arr9 = [1, 2, 3];
arr9.forEach(function (num) {
    console.log(num * 2); // Output: 2, 4, 6
});
// map() : Creates a new array with the results of calling a function on every element.
var arr10 = [1, 2, 3];
var mappedArr = arr10.map(function (num) { return num * 2; });
console.log(mappedArr); // [2, 4, 6]
// filter() : Creates a new array with all elements that pass the test implemented by the provided function.
var arr11 = [1, 2, 3, 4, 5];
var filteredArr = arr11.filter(function (num) { return num % 2 === 0; });
console.log(filteredArr); // [2, 4]
// reduce() : Executes a reducer function on each element of the array, resulting in a single output value.
var arr12 = [1, 2, 3, 4];
var sum = arr12.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum); // Output: 10
