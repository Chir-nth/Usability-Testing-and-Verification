export const orderfood = (foodItem,callback) => {
    console.log("Ordered " + foodItem);
    setTimeout(() => {
        console.log(foodItem +" is ready!");
        callback();
    }, 2000);
};