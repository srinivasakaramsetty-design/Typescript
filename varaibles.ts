let userName: string = "Srinivas";
userName = "Ravi";

console.log("this is my program");

// constant variable

const pi: number = 3.14;

// pi = 3.1415; // Error: Cannot assign to 'pi' because it is a constant.

console.log("Value of pi:", pi);

{
  let a = 10;
  console.log(a); // 10
}

//console.log(a); // ❌ Error: a is not defined

let a = 100;

if (true) {
  let a = 200;
  console.log(a); // 200
}

console.log(a); // 100

for (let i = 0; i < 3; i++) {
  console.log(i);
}

{
  var b = 10;
 
}

console.log(b); // 10 (still accessible ❗)

var name1 = "Srinivas";
var name1 = "Ravi"; // ✔ redeclare allowed

console.log(name1); // Ravi