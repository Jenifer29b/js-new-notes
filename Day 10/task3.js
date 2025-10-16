function bankaccount(initalbalance) {
    function checkbalance() {
        console.log("inital balance : ",initalbalance)
    }
    function depoist(value) {
        initalbalance += value
        console.log("depoist amount :",value)
        console.log("total depoist amount :",initalbalance)
    }
    function withdraw(draw) {
        initalbalance-=draw
        console.log("withdraw amount:", draw)
        console.log("after withoutdraw :" , initalbalance)
    }
    function lastamount() {
        console.log("total Balance amount :",initalbalance)
    }
    return { checkbalance, depoist,withdraw,lastamount }
}
let check = bankaccount(1000)
check.checkbalance()
check.depoist(2000)
check.withdraw(200)
check.withdraw(300)
check.lastamount()



