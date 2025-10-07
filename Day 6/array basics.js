// An array is used to store an multipe values in single variable 
// we can access an array , modify an array by using an indexces


let arr = ["apple", "mango", "banana"]
console.log(arr.push("kiwi"))//adding the element in end of array
console.log(arr)
console.log(arr.pop())  // removing the element in end of array
console.log(arr.unshift("custard"))// adding the element in start of array
console.log(arr)
console.log(arr.shift()) // removing the element in starting of an array
console.log(arr)

let arr1 = ["birds", "names", "things", "animals", "toys"]
console.log(arr1.length)  // in array length means no:of:elemenst in array container
console.log(arr1.indexOf("things"));
console.log(arr1.includes("name"))
arr1[2] = "place"
console.log(arr1)