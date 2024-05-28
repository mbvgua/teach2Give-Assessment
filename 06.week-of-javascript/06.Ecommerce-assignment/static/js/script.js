console.log('Hello world')

// get all the variables
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCart = document.querySelector('.clear-cart')
const cartDom = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartContent = document.querySelector('.cart-content')
const cartTotal = document.querySelector('.cart-total')
const productsDom = document.querySelector('.products-center')


// define empty arrays of both products and cart items
// let products = []
let cart = []

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
class DisplayUI{

}

// store data locally
class StoreData{

}









// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', ()=>{
    // define instances of the classes
    const displayUi = new DisplayUI()
    const products = new Products


    // get products using now available methods
    products.getProducts().then(data => console.log(data))
})