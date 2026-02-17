let firstname = "Alice";
let lastName = "Smith";

//Template literals (ES6 feature)
//es5
console.log("My name is " + firstname + " " + lastName); // using string concatenation

//es6
console.log(`My name is ${firstname} ${lastName}`); // using backticks and ${} for variable interpolation

//Ternary operator
let age = 20;
//es5
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//es6
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor."); // using ternary operator for concise conditional expression
console.log(age >= 18 ? "You are an adult." : "You are a minor."); // using ternary operator for concise conditional expression

//Object destructuring
let user = {
    f_name: "Bob",
    l_name: "Johnson",
    age: 30,
};

//es5
// let f_name = user.f_name;
// let l_name = user.l_name;
// let age = user.age;

//es6
let { f_name, l_name, age: userAge } = user; // using object destructuring to extract properties into variables

//Spread operator
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

//es5
// for loop over both the arrays to create a new <rray

//es6
let newNumbers = [...numbers1, ...numbers2]; // using spread operator to combine two arrays into a new array

let info = ["Test", "User", "ABC", "123" , "2345678"];

function myBio(firstname, lastName, company, age, phone) {
    console.log(`${firstname} ${lastName} works at ${company}, is ${age} years old, and can be reached at ${phone}.`);
}

//es5
myBio(info[0], info[1], info[2], info[3], info[4]); // passing array elements as individual arguments to the function using indexing

//es6
myBio(...info); // using spread operator to pass array elements as individual arguments to the function