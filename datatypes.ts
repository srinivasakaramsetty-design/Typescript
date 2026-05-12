// STRING DATA TYPE
// Used to store text values (names, city, etc.)

let FNAME: string = "Srinivas";
let city: string = "Hyderabad";

console.log(FNAME);
console.log(city);



// NUMBER DATA TYPE
// Used to store numeric values (integers or decimals)

let num1: number = 100;
let num2: number = 200;

console.log(num1);
console.log(num2);



// BOOLEAN DATA TYPE
// Used to store true or false values

let isMarried: boolean = false;
console.log(isMarried);

let isEmployed: boolean = true;
console.log(isEmployed);



// NULL DATA TYPE
// Represents intentional absence of value

let myVar: null = null;
console.log(myVar);



// UNDEFINED DATA TYPE
// Variable declared but not assigned any value

let anotherVar: undefined = undefined;
console.log(anotherVar);



// ANY DATA TYPE
// Can hold any type of value (string, number, boolean)
// Not recommended because it disables type checking

let value: any = "Hello";  // string
value = 100;               // number
value = true;              // boolean

console.log(value);



// ARRAY (STRING ARRAY)
// Used to store multiple string values

let names: string[] = ["Srinivas", "Tester"];
console.log(names);



// ARRAY (NUMBER ARRAY)
// Used to store multiple number values

let numbers: number[] = [1, 2, 3];
console.log(numbers);



// TUPLE DATA TYPE
// Fixed size array with different data types

let user: [string, number] = ["Srinivas", 25];

console.log(user);

// creating custom type
type Name = string;

let userName: Name = "Srinivas";
console.log(userName);

type Employee = {
  name: string;
  id: number;
};

let emp: Employee = {
  name: "Srinivas",
  id: 101
};

console.log(emp);

type Status = "PASS" | "FAIL" | "SKIP";

let testResult: Status = "PASS";
console.log(testResult);

