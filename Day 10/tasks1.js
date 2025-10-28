function createcounter() {
    let count = 0;
    function inner() {
        count++;
        console.log(count)
    }
    inner.reset = function () {
        count = 0;
        console.log("counter reset")
    }
  return inner;
}



let counter = createcounter()
counter()
counter.reset()
counter()


function createaccount(value) {
    
    function balance() {
    console.log(value)
    }
    balance.deposit = function (number) {
        value+=number 
       console.log("deposit amount" , number)
    }
    balance.lastammount = function () {
        console.log("total value",value)
    }
    balance.withdraw = function (amount) {
        value -= amount
        console.log("withdraw amount" , amount)
    }
    return balance

}
let bank = createaccount(1000)
bank.deposit(1000)
bank.deposit(2000)
bank.deposit(1000)
bank.deposit(2000)
bank.withdraw(500)
bank.lastammount()
// bank(); // calling the function



function greetperson(name) {
    
    function greetn() {
        console.log("hello!! welcome here" , name)
    }
    return greetn
}

const greet = greetperson("ruban")
greet()