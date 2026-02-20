let age = 25;
let newAge = age; // newAge is a copy of age, they are independent of each other

newAge = newAge + 1; // newAge is now 26, but age is still 25

console.log(age, newAge); // Output: 25 26

//primitve
let person = {
    name: "John",
    age: 25,
};

let newPerson = person; // newPerson is a reference to the same object as person, they are not independent of each other

newPerson.age = 26 ; // newPerson's age is now 26, but person.age is also 26 because they reference the same object

console.log(person); 