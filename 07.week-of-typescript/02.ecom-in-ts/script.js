console.log('Hello world')

// get all the variables
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDom = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartDiv = document.querySelector('.cart-item')
const cartContent = document.querySelector('.cart-content')
const cartTotal = document.querySelector('.cart-total')
const productsDom = document.querySelector('.products-center')


// define empty arrays of both products and cart items
// let products = []
let cart = []
let buttonsDom = []

// get the products
class Products{
    // function to fetch data
    async getProducts(){
        try{
            // fetch data using promises
            let result = await fetch('./database/db.json')
            let data = await result.json()  //get data in json format

            // destructure the response, which is in the form of an object
            let products = data.items
            products = products.map( item =>{

                // //destructure using method 1
                // const {sys:{id}} = item
                // const {fields:{title,price}} = item
                // const {fields:{image:{fields:{file:{url}}}}} = item
                // return {title:title,price:price,id:id,image:url}  //uneccessary in es6

                // destructure with method 2
                const {id} = item.sys
                const {title, price } = item.fields
                const image = item.fields.image.fields.file.url
                return {title,price,id,image}  //uneccessary in es6
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }

}

// display the products
// should contain bulk of the methods, 
class DisplayUi{

    // funtion to display products in main webpage
    displayProducts(products){  //essential to place the products parameter
        let html = ''

        // since we get back an array, use array method to loop through @ product
        products.forEach(product => {
            html += `<article class="product">
                        <div class="img-container">
                            <img src="${product.image}" alt="${product.title}" class="product-img">
                            <button class="bag-btn" data-id="${product.id}">
                                <i class='bx bx-cart-add'></i>
                                add to cart
                            </button>
                        </div>
                        <h3> ${product.title} </h3>
                        <h4> $ ${product.price} </h4>
                    </article> `
        })
        productsDom.innerHTML = html
        
    }

    // get the add to cart button ids
    getAddToCartButton(){
        // use spread operator to get nodelist of all buttons
        const buttons = [...document.querySelectorAll('.bag-btn')]
        buttonsDom = buttons

        // get unque id of @button using forEach
        buttons.forEach(button =>{
            let id = button.dataset.id
            // console.log(id)
            
            //check if item is alreaady existing in cart
            let inCart = cart.find(item => item.id === id)

            if(inCart){
                button.innerText = 'In Cart'
                button.disabled = true
            } else {
                button.addEventListener('click', event=>{
                    event.target.innerText = 'In Cart'
                    event.target.disabled = true

                    // get product from products
                    let cartItem = {...Storage.getProduct(id),amount:1}
                    // console.log(cartItem)

                    // add item to empty cart array
                    cart = [...cart,cartItem]
                    // console.log(cart)

                    // save cart to the local storage
                    Storage.saveToCart(cart)

                    // set cart values number to increase/decrease
                    this.setCartValues(cart)

                    // add cart items
                    this.addCartItem(cartItem)

                    // display items in the cart
                    this.showCartItems()
                })
            }
        })
    }


    setCartValues(cart){
        // function to auto-increment cart items number
        let tempTotal = 0
        let itemsTotal = 0
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cartItems.innerText = itemsTotal
    }

    addCartItem(item){
        // function to add products to cart
        let html = ''
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="product">
                <div>
                    <h4> ${item.title} </h4>
                    <h5> $${item.price} </h5>
                    <!-- instead of remove words.. place the delete icon instead -->
                    <span class="remove-item" data-id="${item.id}"> remove </span>
                </div>

                <div>
                    <i class='bx bx-chevron-up bx-md' data-id="${item.id}"></i>
                        <p class="item-amount"> ${item.amount} </p>
                    <i class='bx bx-chevron-down bx-md' data-id="${item.id}"></i>
                </div>
            </div>`

        cartContent.innerHTML += html
        // console.log(cartDiv)
    }

    showCartItems(){
        // basically change css styling to bring cart to foreground
        cartOverlay.classList.add('transparentBcg')
        cartDom.classList.add('showCart')
    }

    hideCartItems(){
        cartOverlay.classList.remove('transparentBcg')
        cartDom.classList.remove('showCart')
    }

    setUpApp(){
        // setup  all the button event listeners
        cart = Storage.getCart()
        this.setCartValues(cart)
        this.populateCart(cart)
        cartBtn.addEventListener('click', this.showCartItems)
        closeCartBtn.addEventListener('click', this.hideCartItems)

    }

    populateCart(cart){
        cart.forEach(item => this.addCartItem(item))
    }

    cartLogic(){
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart() })

        // cart functionality.remove.increase.decrease
        cartContent.addEventListener('click', (event) => {
            // console.log(event)  //see the event

            // removing items
            if(event.target.classList.contains("remove-item")){
                let removeThisItem = event.target
                let id = removeThisItem.dataset.id
                
                cartContent.removeChild(removeThisItem.parentElement.parentElement)// remove item from DOM
                this.removeItem(id) // remove item from cart array
            } else if(event.target.classList.contains("bx-chevron-up")){
                // increment items
                let incrementThisItem = event.target
                let id = incrementThisItem.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount + 1
                Storage.saveToCart(cart)    //save to storage
                this.setCartValues(cart)    //save to cart
                incrementThisItem.nextElementSibling.innerText = tempItem.amount

            } else if(event.target.classList.contains("bx-chevron-down")){
                // decrement items
                let decrementThisItem = event.target
                let id = decrementThisItem.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount - 1
                if(tempItem.amount > 0){
                    Storage.saveToCart(cart)    //save to storage
                    this.setCartValues(cart)    //save to cart
                    decrementThisItem.previousElementSibling.innerText = tempItem.amount
                } else {
                    this.removeItem(id) //remove from cart
                    cartContent.removeChild(decrementThisItem.parentElement.parentElement) //remove from DOM

                }

            }
        })
    }

    clearCart(){
        /*---MAJOR BUG---
        console.log(this) -> used to trouble shoot bug
        would not clear cart items. needed to put this.() in the arrow
        function above
        */
        let cartItems = cart.map(item => item.id)
        console.log(cartItems)  //get unique id of each items in cart

        // loop over the array, removing each items
        cartItems.forEach( id => this.removeItem(id))

        // console.log(cartContent.children) 
        // remove item from cart
        while(cartContent.children.length > 0){
            cartContent.removeChild(cartContent.children[0])
        }

        // hide the cart
        this.hideCartItems()
    }

    removeItem(id){
        // remove items based on the unique id
        cart = cart.filter(item => item.id !== id)
        this.setCartValues(cart)
        Storage.saveToCart(cart)
        let button = this.getSingleButton(id)
        button.disabled = false
        button.innerHTML = `<i class='bx bx-cart-add'></i> add to cart`
    }

    getSingleButton(id){
        return buttonsDom.find(button => button.dataset.id === id)
    }
}



// store data locally to prevent erasal on refresh
class Storage{
    // function to store data in local storage
    static storeData(products){
        // nani amezima stima?
        localStorage.setItem("products",JSON.stringify(products))

    }

    // function to get unique product id
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'))
        return products.find(product => product.id === id)
    }

    static saveToCart(cart){
        localStorage.setItem('cart',JSON.stringify(cart))
    }

    static getCart(){
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }


}




// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', ()=>{
    // define instances of the classes
    const displayUi = new DisplayUi()
    const products = new Products


    // get products using now available methods
    // products.getProducts().then(products => console.log(products))

    // call setUp function to first
    displayUi.setUpApp()

    // allow display of products in home page
    products.getProducts().then(products => {
        displayUi.displayProducts(products)
        Storage.storeData(products)     //static method thus no need to create an instance
    }).then(()=>{
        // allow method to run only after buttons have a value
        displayUi.getAddToCartButton()
        displayUi.cartLogic()
    })
})