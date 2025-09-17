
// let can be reassigned but it can't be redeclared
let a = 10;    
a = 20;
console.log(a)


// here const can't be redeclared or reassigned .. it has a const value
const b = 15;
console.log(b)


//const can't be reassign in normal values but while in array and objects const 
// can be reassigned ony single value but not the entire array or object .. because The reference to 
// the object is constant.But the contents (the data inside the object or array) are still mutable 

const obj = {
    "name": "Jeni",
    "place" : "Madurai"
}
obj.name = "ruban"
console.log(obj.name)
console.log(obj.place)

const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)

// var can be redeclared and reassigned .. but it old style . modern js use only the let and const
var x = 10;
var x = 25;
console.log(x)


