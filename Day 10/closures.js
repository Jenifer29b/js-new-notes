//closure in javascript is used to access the outer variable in inner function
// even after the outer varibale is finish exceuting

// A closure happens when a function remembers and uses variables from its outer function
//  — even after the outer function has finished running.

function outer() {
    let count = 0;  //outer varible

    function inner() {
        count++  // inner function access the outer varibale
        console.log(count)
    }
    return inner
}
let counter = outer();
counter();
counter();

function innerfun() {
    let num = 0;
    function outerfun() {
        num++
        console.log(num*3)
    }
    return outerfun
}
let number = innerfun()
number()
number()




