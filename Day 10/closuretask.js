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

cart.removeitem("pants")
cart.showitem()
cart.newitems("frock")
cart.additem() // its adding again and again all items because of calling all items
