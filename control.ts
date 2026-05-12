// -----------------------------
// Control Statements & Loops in TypeScript
// -----------------------------

// if statement
// Checks whether the person is eligible to vote

let age: number = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}


// ------------------------------------
// if-else if-else statement
// Used to calculate grade based on score
// ------------------------------------

let score: number = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// ------------------------------------
// switch statement
// Displays the day of the week
// ------------------------------------

let day: number = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    // Runs when no case matches
    default:
        console.log("Invalid day");
}


// ------------------------------------
// Nested / Simple if-else statement
// Checks whether a number is even or odd
// ------------------------------------

let number: number = 5;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ------------------------------------
// for loop
// Prints numbers from 1 to 5
// ------------------------------------

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ------------------------------------
// while loop
// Executes while condition is true
// ------------------------------------

let i1 = 1;

while (i1 <= 5) {
    console.log(i1);
    i1++;
}


// ------------------------------------
// do-while loop
// Executes at least once
// ------------------------------------

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// ------------------------------------
// break statement
// Stops the loop when i becomes 5
// ------------------------------------

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// ------------------------------------
// continue statement
// Skips number 3
// ------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


// ------------------------------------
// Program completed
// ------------------------------------

console.log("All control statements and loops executed successfully.");