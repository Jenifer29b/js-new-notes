// there are two types of for loops variations like : for in , for of
// for.in is used for access the indexes in array not the value directly in array
// for.of is used for access the values directly in array,string , map etc.,


let arr = ["apple", "mango", "banana"]

for (let x in arr) {
    console.log(arr[x])
}

let obj = {
    "name": "Jeni",
    "place" : "Madurai"
}

for (let obj1 in obj) {
    console.log("object Value usinf for in :",obj[obj1])
}

for (let keys of Object.keys(obj)) {
    console.log("object key :" , keys)
}

for (let values of Object.values(obj)) {
    console.log("object Values : " , values)
}

for (let entries of Object.entries(obj)) {
    console.log("object entries : " , entries)
}

// let arr1 = ["names", "places", "things", "animals"]

// for (let num of arr1) {
//     console.log(num.length)  // here length describes the no:of:characters in particular string
// }

let array = ["Jan", "feb", "march", "april", "may"]

for (let months of array) {
    console.log("month : ", months)
}

let str = "feb"
console.log(str.length)