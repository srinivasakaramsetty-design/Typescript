// fucntion with parameter and return type
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
// function with optional parameter 
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
// function with default parameter
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
// arrow function with parameter and return type
var divide = function (a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
console.log(divide(10, 2)); // Output: 5
