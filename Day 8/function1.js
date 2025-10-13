function greet(name) {
    console.log("hello " , name)
}
greet("jeni")  //Function with Parameter


function welcome() {
    console.log("Welcome to Js World")
}
welcome()  // function without parameter

function add(a,b) {
    return (a+b)
}
console.log(add(5, 5)) // function with return value...
// return means immediatey stops the exceution and returns the output.

let multiply = function (a,b) {
    return (a*b)
}

console.log(multiply(5,4)) // Anonyums function ..
// function without function name you can store in another variable

let add1 = (a,b) => {
    return(a+b)
}
console.log(add1(20, 20)) // arrow function .. it is the simple function we can create

    
