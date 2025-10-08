let arr = ["apple", "mango", "banana"]

for (let arr1 of arr) {
     console.log(arr1.split('').reverse().join(''))
}

let num = [1, 2, 3, 4, 5]

for (let num1 of num) {
    if (num1 % 2 == 0) {
        console.log("even number" , num1)
    } else {
        console.log("odd number" , num1)
    }
}