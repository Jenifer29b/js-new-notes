let colors = ["red", "green", "blue"];
// Print each color

for (let x of colors) {
    console.log(x)
}

let cars = ["BMW", "Audi", "Tesla"];
// Print each index and car name

for (const car in cars) {
    console.log(car);
    console.log(cars[car])
}

let numbers = [2, 4, 6, 8, 10]

for (let value of Object.values(numbers)) {
    console.log("Number :" , value)
}