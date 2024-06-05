console.log('Hello there!🐧')


// get all the variables
const cartBtn = document.querySelector('.cart-btn')! as HTMLButtonElement;
const closeCartBtn = document.querySelector('.close-cart')! as HTMLButtonElement;
const clearCartBtn = document.querySelector('.clear-cart')! as HTMLButtonElement;
const cartDom = document.querySelector('.cart')! as HTMLElement;
const cartOverlay = document.querySelector('.cart-overlay')! as HTMLElement;
const cartItems = document.querySelector('.cart-items')! as HTMLElement;
const cartDiv = document.querySelector('.cart-item')! as HTMLElement;
const cartContent = document.querySelector('.cart-content')! as HTMLElement;
const cartTotal = document.querySelector('.cart-total')! as HTMLElement;
const productsDom = document.querySelector('.products-center')! as HTMLElement;

// define empty arrays of both products and cart items
let cart: Product[] = [];
let productsUrl: string = 'http://localhost:3000/products'

// Interface for product data structure
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount?: number; // optional property for amount in cart
}


class getProducts{

  public constructor (){
    this.fetchProducts()
  }

  // get products from db
  async fetchProducts(){
    try{
      const response = await fetch(productsUrl)
      const products = await response.json() as Product[]
      // console.log(products) 
      return products
    } catch(error){
      console.log(error)
      return []
    }
  }

  async displayProducts(){
    let products = await this.fetchProducts()
    let html = ''
  
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

}


// add the eventListener to start entire project
document.addEventListener('DOMContentLoaded', ()=>{
  // define instances of the classes
  const productsInstance = new getProducts()

  // get products using now available methods
  productsInstance.fetchProducts()
  .then(() =>{
    productsInstance.displayProducts()
  })

})
