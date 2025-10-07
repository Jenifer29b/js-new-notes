let movies = ["Inception", "Titanic", "Avatar"];
// Add one movie
// Remove last movie
// Find index of "Titanic"

(movies.push("theri"))
console.log(movies)
console.log(movies.pop())
console.log(movies)
console.log(movies.indexOf("Titanic"))

let numbers = [1, 2, 3, 4, 10,0]
let sum = 0;

for (let value of Object.values(numbers)) {
    sum += value
}
console.log(sum)
// console.log(Math.max(...numbers))

let max = numbers[0];
for (let num of numbers) {
    if (num > max) {
        max = num
    }
    // console.log(num)
}
console.log(max)

let min = numbers[0];

for (let num of numbers) {
    if (num < min) {
        min = num
    }
}
console.log(min)