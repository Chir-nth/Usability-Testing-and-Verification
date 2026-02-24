//ES5
function print(num){
    console.log(num);  
}

function calculator(num1, num2, callback){
    var sum = num1 + num2;
    callback(sum);
}