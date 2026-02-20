//ES5
function addNumbers(num1, num2) {
return num1 + num2;
}

var sum = addNumbers(2, 4);

//console.log(sum);
//console.log(addNumbers(5, 6));

//ES6 arrow function
const addNumbersES6 = (num1, num2) => {
    return num1 + num2;
}

let addNumbersES6Short = (num1, num2) => num1 + num2;

addNumbersES6(2, 4);
addNumbersES6Short(5, 8);