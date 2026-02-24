let array_num = [1, 2, 3, 4, 5];

// let square = (num) => {
//     return num * num;
// };

// let squared_num = array_num.map(square);

let squared_num_correct = array_num.map((num) =>  num * num);

// console.log(squared_num);
// console.log(squared_num_correct);


//Filter
let age = [1, 10, 12, 18, 2, 20, 25, 18, 30];

let filtered_age = age.filter((age) => {
    if(age >= 18) {
        return age;
    }
});

//console.log(filtered_age);

//Reduce
let arraySpend_Februray = [
  { item: "Grocery", price: 25 },
  { item: "Clothing", price: 100 },
  { item: "Mobile", price: 250 },
  { item: "Trip", price: 500 },
]

let sum = arraySpend_Februray.reduce((prev, curr) => {    // prev is the accumulated value, curr is the current item in the array
    console.log(prev,"+",curr);                           // prev is the accumulated value, curr is the current item in the array
    return prev + curr.price;                            // we are adding the price of the current item to the accumulated value
}, 0);                                                   // 0 is the initial value of prev

console.log(sum);