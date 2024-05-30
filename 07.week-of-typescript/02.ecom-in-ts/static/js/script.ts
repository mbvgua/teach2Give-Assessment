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
let buttonsDom: HTMLButtonElement[] = [];

// Interface for product data structure
interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
  amount?: number; // optional property for amount in cart
}

// Products class
class Products {
  // function to fetch data
  async getProducts(): Promise<Product[]> {
    try {
      // fetch data using promises
      let result = await fetch('./database/db.json');
      let data = await result.json() as { items: any[] };  //get data in json format

      // destructure the response, which is in the form of an object
      let products = data.items;
      products = products.map((item: any) => {
        // destructure using object destructuring
        const { id,title,price,image } = item;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
      return []; 
    }
  }
}
