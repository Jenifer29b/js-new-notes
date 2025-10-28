//Spread operator(...) is used to combine a multiple array in single array .
// spread operator is used to combining 

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let combined = [...arr1, ...arr2]
console.log(combined)

let num1 = [1, 3, 2, 4, 5]
console.log(6, 7, ...num1)

// spread operator is also used for copying from original (shallow copy)
let copy = [...arr1];
copy.push(40)
console.log(copy)

let person = {
    name: "Jeni",
    place : "chennai"
}
let Job = {
    work: "Full Stack Developer",
    In : "Madurai"
}

let details = { ...person, ...Job }
console.log(details)
