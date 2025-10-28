//Function Declaration
function sayHello() {
    console.log("Hey!! Javascript Learner")
}
sayHello()

// Function with Parameter
function greetUser(name, age) {
    console.log(`Hello ${name} , you are ${age} years old`)
}
greetUser("jeni", 20)

//Function with return values
function sum(a, b) {
    return(a+b)
}
console.log(sum(10, 10))

//Function Expression (Anonyums Function)
let square = function (x) {
    return(x*x)
}
console.log(square(10))

//Arrow Function
let multiply = (a, b) => {
    return (a*b)
}
console.log(multiply(5, 5))

//Function with Default parameter

function login(user = "guest") {
    console.log("welcome Back!!",user)
}
login()
login("ruban")


// IIFE = Immediately Invoked Function Expression 
//An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that runs immediately
//  after it is defined — without needing to be called separately.
 const result = (function(a,b){
  return (a+b)
})(10,10);
console.log(result)
