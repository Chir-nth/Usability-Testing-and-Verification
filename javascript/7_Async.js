let people = ["Ron", "John", "Dave"];

let isKayoComing = false; // change this to true to see the success case of the promise

//creation of a promise
let kayo = new Promise((resolve, reject) => {
    // 2 seconds later, we check if Kayo is coming
    setTimeout(() => {
        if (isKayoComing) {
            resolve("Kayo is coming!"); // promise is fulfilled with a success message
        } else {
            reject("Kayo is sick and cannot bake the cake!"); // promise is rejected with an error message
        }
    }, 3000);
});

//ES5 WAY OF HANDLING ASYNC CODE
//consuming the promise
// const party =  async() => {
//     kayo
//     .then((res) => {
//         console.log(res); // handling the promise with then for success
//     })
//     .catch((err) => {  
//         console.log(err) // handling the promise with catch for error
// }); 
//     console.log("Party is starting...");
//     people.forEach((person) => console.log(person + " is at the party!"));
// };

// party();


//ES6 WAY OF consuming the promise using async/await
const party_ES6 =  async() => {
    //consuming the promise
    try{
        let res = await kayo; // waiting for the promise to resolve or reject
        console.log(res); // handling the promise with then for success
    }
    catch(err) {
        //if the promise is rejected, the error will be caught here
        console.log("Party is starting without Kayo...", err);
    }
    console.log("Party is starting...");
    people.forEach((person) => console.log(person + " is at the party!"));
};

party_ES6();