let a = 10;
let b = 20;

console.log('the sum of two number '+(a+b));

let c = a * b;
console.log('the multiplication of two number '+c);

let d = a / b;
console.log('the division of two number '+d);

let e = a - b;
console.log('the subtraction of two number '+e);

let f = a % b;
console.log('the modulus of two number '+f);

// comparison operators
console.log('is a equal to b? '+(a == b));
console.log('is a not equal to b? '+(a != b));
console.log('is a greater than b? '+(a > b));
console.log('is a less than b? '+(a < b));
console.log('is a greater than or equal to b? '+(a >= b));
console.log('is a less than or equal to b? '+(a <= b));

// logical operators
let x = true;
let y = false;

console.log('x AND y: '+(x && y));
console.log('x OR y: '+(x || y));
console.log('NOT x: '+(!x));

// assignment operators

let g = 5;
g += 10;
console.log('g after addition assignment: '+g);

g -= 5;
console.log('g after subtraction assignment: '+g);

g *= 2;
console.log('g after multiplication assignment: '+g);

g /= 2;
console.log('g after division assignment: '+g);

g %= 3;
console.log('g after modulus assignment: '+g);

// increment and decrement operators
let h = 10;
console.log('h before increment: '+h);
h++;
console.log('h after increment: '+h);

let i = 10;
console.log('i before decrement: '+i);
i--;
console.log('i after decrement: '+i);

// ternary operator
let j = 15;
let result = (j % 2 === 0) ? 'even' : 'odd';
console.log('j is '+result);
