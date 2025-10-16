function createcounter(value) {
    console.log(value)
    function inner() {
        value+=5
        console.log(value)
    }
    return inner
    
}
let counter = createcounter(5)
counter()
counter()
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
bank.withdraw(500)
// bank.lastammount()
// console.log(bank.lastammount())

function greetuser(name) {
    function greet() {
         console.log("hello!!" , name)
    }
    greet.extra = function (name1) {
        name += name1
        console.log(name1)
    }
    return greet
}
const greeeting = greetuser("ruban")
greeeting.extra(", good day")
greeeting()


function createcart(cart) {
    for (let carts of cart) {
        console.log([carts.names])
    }

}
createcart([{ "names": "places"},{"names" : "location"}])