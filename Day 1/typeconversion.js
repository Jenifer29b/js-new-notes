// this is Explicit conversion which means we changes the type by using the functions or constructors

const num = 1;
console.log(num.toString())
console.log(String(num))

const str = "10"
console.log(Number(str))

console.log(Boolean(0))
console.log(Boolean(1))

// Implicit conversion which means js automatically converts the datatype from one to another during operations 

console.log("5" + 2)  //Converts number into string
console.log("5" - 2)  // converts string into number
console.log(true + 1) // convert boolean into number
