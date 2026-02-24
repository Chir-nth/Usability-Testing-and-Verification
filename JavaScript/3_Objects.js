let car = { 
    car_name: "Mr. Bean's Car",
    model: "Mini Cooper",
    weight: 1000,
    start: () => {
        console.log("Vroom Vroom!");
    },
    car_details: {
        insurance_Validity: "2025-12-31",
        isFined: false,
    }
};
console.log(car.car_name);
console.log(car.car_details.insurance_Validity);
console.log(car.start());