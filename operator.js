var a = 10;
var b = 20;
console.log('the sum of two number ' + (a + b));
var c = a * b;
console.log('the multiplication of two number ' + c);
var d = a / b;
console.log('the division of two number ' + d);
var e = a - b;
console.log('the subtraction of two number ' + e);
var f = a % b;
console.log('the modulus of two number ' + f);
// comparison operators
console.log('is a equal to b? ' + (a == b));
console.log('is a not equal to b? ' + (a != b));
console.log('is a greater than b? ' + (a > b));
console.log('is a less than b? ' + (a < b));
console.log('is a greater than or equal to b? ' + (a >= b));
console.log('is a less than or equal to b? ' + (a <= b));
// logical operators
var x = true;
var y = false;
console.log('x AND y: ' + (x && y));
console.log('x OR y: ' + (x || y));
console.log('NOT x: ' + (!x));
// assignment operators
var g = 5;
g += 10;
console.log('g after addition assignment: ' + g);
g -= 5;
console.log('g after subtraction assignment: ' + g);
g *= 2;
console.log('g after multiplication assignment: ' + g);
g /= 2;
console.log('g after division assignment: ' + g);
g %= 3;
console.log('g after modulus assignment: ' + g);
// increment and decrement operators
var h = 10;
console.log('h before increment: ' + h);
h++;
console.log('h after increment: ' + h);
var i = 10;
console.log('i before decrement: ' + i);
i--;
console.log('i after decrement: ' + i);
// ternary operator
var j = 15;
var result = (j % 2 === 0) ? 'even' : 'odd';
console.log('j is ' + result);
