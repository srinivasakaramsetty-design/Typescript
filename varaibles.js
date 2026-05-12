var userName = "Srinivas";
userName = "Ravi";
console.log("this is my program");
// constant variable
var pi = 3.14;
// pi = 3.1415; // Error: Cannot assign to 'pi' because it is a constant.
console.log("Value of pi:", pi);
{
    var a_1 = 10;
    console.log(a_1); // 10
}
//console.log(a); // ❌ Error: a is not defined
var a = 100;
if (true) {
    var a_2 = 200;
    console.log(a_2); // 200
}
console.log(a); // 100
for (var i = 0; i < 3; i++) {
    console.log(i);
}
{
    var b = 10;
}
console.log(b); // 10 (still accessible ❗)
var name1 = "Srinivas";
var name1 = "Ravi"; // ✔ redeclare allowed
console.log(name1); // Ravi
