function createcart(item) {
    let cartitems = [];
    function additem() {
        for (let items of item) {
            cartitems.push(items)
        }
        console.log("added item :" , cartitems)
    }
    function newitems(product) {
        cartitems.push(product)
        console.log("added new items :" , product)
    }
     
    function removeitem(value) {
        cartitems.pop(value)
        console.log("item removed : " , value)
    }
    function showitem() {
        console.log("items remained :",cartitems)
    }
    return { additem, removeitem,showitem , newitems}
}

let cart = createcart(["dress", "shawl","pants"])
cart.additem()
cart.newitems("frock")
cart.removeitem("pants")
cart.showitem()

