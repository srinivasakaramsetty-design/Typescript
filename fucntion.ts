// fucntion with parameter and return type

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

// function with optional parameter 

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice"));

console.log(greet("Bob", "Hi"));

// function with default parameter

function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply(5)); // Output: 5

console.log(multiply(5, 2)); // Output: 10

// arrow function with parameter and return type

const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log(divide(10, 2)); // Output: 5