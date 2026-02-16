let array_num = [1, 2, 3, 4, 5];

let square = (num) => {
    return num * num;
};

let squared_num = array_num.map(square);

let squared_num_correct = array_num.map((num) =>  num * num);

console.log(squared_num);
console.log(squared_num_correct);