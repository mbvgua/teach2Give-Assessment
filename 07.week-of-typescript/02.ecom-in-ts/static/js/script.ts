console.log('Hello there!🐧')

// get constants from the html 
const cartCount = document.querySelector('#cart-count')	//grab the cart menu icon
const mainDiv = document.querySelector('.main-content')!
const cartBtn = document.querySelector('#add-cart')  //add to cart
let productHtml = document.querySelector('.card')   //adding html
const cartItem = document.querySelector('.cart-items')
const totalPrice = document.getElementById('total-cart-price')
const searchBar = document.querySelector('.search-bar')

// define all the possible URLs
const productsURL:string = './database/db.json'
let cart = []


// define structure of products objects 
interface Product{
    // id: string
    id:number
    title: string
    image:string
    description:string
    price:number
}

interface cartItems{
    id:number
    // id: string
    title: string
    image:string
    description:string
    price:number
    productAmount:number
}


// get the products
class getProducts{
    constructor (private product:Product){

    }
    render(){
        let html = ''

        html = `
            <div class="card">
            <div class="image">
                <img src=${this.product.image} alt="Image">
            </div>
                <p class="title"> ${this.product.title} </p>
            <div class="price">
                <label> Ksh. ${this.product.price}/= </label>
            </div>
            <div>
                <button id="add-cart" onclick="addCartItems('${this.product.id}')" class="add-cart"> Add to Cart </button>
            </div>
            </div>`

        
        return html
    }

    
    // function to fetch data
    fetchProducts(){
        return new Promise<Product[]> ((resolve,reject) => {
            fetch(productsURL)
            .then((response) => response.json())
            .then((data) =>  console.log(data))
            .catch((error) => reject(error))
        })

    }
}

const mainClass = new getProducts()
mainClass.fetchProducts()
