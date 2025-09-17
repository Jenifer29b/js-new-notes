 // Ternary  Operator : means if the condition is true first value 
 // will excetue otherwise second value will excetue

let x = 10;
x = x > 10 ? "this is true" : "this is false"
console.log(x)

// Nullish Coalescing Operator (??) .. means is the left hand value is null or undefined
// it returns the right hand value
// same to or operator (||) ... means here if the left hand value is false(0 , "" , false) 
// it returns the right hand value


let b = null ?? "this is null"
let c = false || "this is or"
console.log(b);
console.log(c)

//Optional chaining : safely access the nested objects without crashing .. 

let obj = { profile: { name : "jenifer" } }
console.log(obj.profile?.name)


const a = {profile : {name : "Jennifer"},area : {
    place : "chennai"
}}

console.log(a.profile?.name)
console.log(a.area?.place)

