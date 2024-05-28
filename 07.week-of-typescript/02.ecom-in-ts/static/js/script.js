console.log('Hello there!🐧');
// get constants from the html 
var cartCount = document.querySelector('#cart-count'); //grab the cart menu icon
var mainDiv = document.querySelector('.main-content');
var cartBtn = document.querySelector('#add-cart'); //add to cart
var productHtml = document.querySelector('.card'); //adding html
var cartItem = document.querySelector('.cart-items');
var totalPrice = document.getElementById('total-cart-price');
var searchBar = document.querySelector('.search-bar');
var cart = [];
// define the products into an array
var products = [
    {
        id: "1",
        title: "Bananas",
        image: "./images/bananas.jpg",
        description: "Best bananase this side of the sahara :)",
        price: 10
    },
    {
        id: "2",
        title: "Baseball Helmet",
        image: "./images/baseball-hat.jpg",
        description: "Protect your head on the diamond!",
        price: 3500
    },
    {
        id: "3",
        title: "Surface Laptop",
        image: "./images/surface-laptop.jpg",
        description: "not just a possesion, its an experience!",
        price: 90000
    },
    {
        id: "4",
        title: "Gaming PC",
        image: "./images/gaming-pc.jpg",
        description: "to those who want more",
        price: 200000
    },
    {
        id: "5",
        title: "Samsung Flip",
        image: "./images/samsungFlip.jpg",
        description: "the phone beside you is always a samsung",
        price: 250000
    },
    {
        id: "6",
        title: "Samsung Galaxy",
        image: "./images/s22.jpg",
        description: "we offe quality at affordable prices",
        price: 50000
    },
    {
        id: "7",
        title: "Kentucky Fries",
        image: "./images/food.jpg",
        description: "a taste of america at your doorstep",
        price: 900
    },
    {
        id: "8",
        title: "Office Chair",
        image: "./images/chair.jpg",
        description: "comfort at your desk",
        price: 7090
    },
    {
        id: "9",
        title: "Baseball Glove",
        image: "./images/baseball-glove-mizuno.jpg",
        description: "For a taste of style and spleandor, try the new mizuno glove.",
        price: 7344
    },
    {
        id: "10",
        title: "Ripe Bananas",
        image: "./images/bananas-2.jpg",
        description: "Kula ndizi bro. si kila siku fegi",
        price: 10
    },
    {
        id: "11",
        title: "Apples",
        image: "./images/apples.jpg",
        description: "try to keep the doctor away? look no further",
        price: 30
    },
    {
        id: "12",
        title: "Hockey Stick",
        image: "./images/hockey-stick.jpg",
        description: "play with style",
        price: 13000
    },
    {
        id: "13",
        title: "Dell Laptop",
        image: "./images/laptop-Dell-XPS.jpg",
        description: "try the unusual",
        price: 40000
    },
    {
        id: "14",
        title: "Hp Elitebook",
        image: "./images/HP-Elitebook-950.jpg",
        description: "the laptop beside you is always a HP :)",
        price: 3000
    },
    {
        id: "15",
        title: "Asus Zephyrus",
        image: "./images/laptop-ASUS.jpg",
        description: "for all the gamers!",
        price: 85700
    },
    {
        id: "16",
        title: "Thin Laptop",
        image: "./images/laptop-HP.jpg",
        description: "elegance at its finest",
        price: 56400
    },
    {
        id: "17",
        title: "Dual Laptop",
        image: "./images/laptop-phone.jpg",
        description: "youve never seen this before",
        price: 130000
    },
    {
        id: "18",
        title: "Windows Laptop",
        image: "./images/laptop-windows.jpg",
        description: "not just an OS, but the hardware too",
        price: 78499
    },
    {
        id: "19",
        title: "MacBook Air13",
        image: "./images/laptop-MacBook.jpg",
        description: "welcome to the Mac ecosystem",
        price: 60588
    },
    {
        id: "20",
        title: "Samsung Laptop",
        image: "./images/samsung-laptop.jpg",
        description: "trusted and verified",
        price: 140000
    },
    {
        id: "20",
        title: "Samsung Laptop",
        image: "./images/samsung-laptop.jpg",
        description: "trusted and verified",
        price: 140000
    }
];
// function addDataToHtml():void{
//     let html = ''
//     if (products.length > 0){
//         products.forEach( product => {
//             html +=`
//             <div class="card">
//                 <div class="image">
//                     <img src=${product.image} alt="Image">
//                 </div>
//                     <p class="title"> ${product.title} </p>
//                 <div class="price">
//                     <label> Ksh. ${product.price}/= </label>
//                 </div>
//                 <div>
//                     <button id="add-cart" onclick="addCartItems('${product.id}')" class="add-cart"> Add to Cart </button>
//                 </div>
//             </div>`
//         })
//     } 
//     mainDiv.innerHTML += html
// };
// addDataToHtml()
// // Update the cart UI
// function updateCartUI() {
//     let html = ''
//     let total = 0
//     cartCount.innerHTML = cart.length   //increment counter on cart
//     if (cart.length == 0){
//         totalPrice.innerHTML = `<label> Ksh.${total} </label>`
//     } else if (cart.length > 0){
//     cart.forEach(product => {
//         html += `
//         <div class="items">
//         <div class="cart-image">
//             <img src="${product.image}" alt="cart-image">
//         </div>
//         <div class="cart-name">
//             <label> ${product.title} </label>
//         </div>
//         <div class="cart-price">
//             <label> Ksh.${product.price} </label>
//         </div>
//         <div class="quantity">
//             <span class="cart-minus" onclick="incrementVal"><i class='bx bx-message-square-minus bx-xs'></i></span>
//             <span> 0 </span>
//             <span class="cart-plus" onclick="decrementVal"><i class='bx bx-message-square-add bx-xs'></i></span>
//         </div>
//         <div>
//             <i class='bx bx-trash'></i>
//         </div>
//         </div>`
//     // increment the total value also
//     total += product.price
//     totalPrice.innerHTML = `<label> Ksh.${total} </label>`
//     })
//     } else {
//         html += `<div>
//                     <label> There are no items in your cart</label>
//                 </div>`
//     }
//     cartItem.innerHTML = html; // Clear the existing cart items
// }
// // Add product to cart
// function addCartItems(productId) {
//     const product = products.find(item => item.id === productId);
//     if (product) {
//         cart.push(product); // Add product to cart array
//         updateCartUI(); // Update UI to reflect the changes in the cart
//     }
// }
// // Add event listener to the "Add to Cart" buttons
// mainDiv.addEventListener('click', (event) => {
//     if (event.target.classList.contains('add-cart')) {
//         const productId = event.target.dataset.productId;
//         addCartItems(productId);
//     }
// });
// // fetchCartItems()
var ProductHandler = /** @class */ (function () {
    function ProductHandler(products, mainDiv, cartCount, totalPrice, cartItem) {
        this.products = products;
        this.cart = [];
        this.mainDiv = mainDiv;
        this.cartCount = cartCount;
        this.totalPrice = totalPrice;
        this.cartItem = cartItem;
    }
    ProductHandler.prototype.addDataToHtml = function () {
        var html = "";
        if (this.products.length > 0) {
            this.products.forEach(function (product) {
                html += "\n              <div class=\"card\">\n                  <div class=\"image\">\n                      <img src=".concat(product.image, " alt=\"Image\">\n                  </div>\n                      <p class=\"title\"> ").concat(product.title, " </p>\n                  <div class=\"price\">\n                      <label> Ksh. ").concat(product.price, "/= </label>\n                  </div>\n                  <div>\n                      <button id=\"add-cart\" onclick=\"this.addCartItems('").concat(product.id, "')\" class=\"add-cart\"> Add to Cart </button>\n                  </div>\n              </div>");
            });
        }
        this.mainDiv.innerHTML += html;
    };
    ProductHandler.prototype.updateCartUI = function () {
        var html = "";
        var total = 0;
        this.cartCount.innerHTML = this.cart.length; // Update cart count
        if (this.cart.length === 0) {
            this.totalPrice.innerHTML = "<label> Ksh.".concat(total, " </label>");
        }
        else {
            this.cart.forEach(function (product) {
                html += "\n          <div class=\"items\">\n          <div class=\"cart-image\">\n              <img src=\"".concat(product.image, "\" alt=\"cart-image\">\n          </div>\n          <div class=\"cart-name\">\n              <label> ").concat(product.title, " </label>\n          </div>\n          <div class=\"cart-price\">\n              <label> Ksh.").concat(product.price, " </label>\n          </div>\n          <div class=\"quantity\">\n              <span class=\"cart-minus\" onclick=\"incrementVal\"><i class='bx bx-message-square-minus bx-xs'></i></span>\n              <span> 0 </span>\n              <span class=\"cart-plus\" onclick=\"decrementVal\"><i class='bx bx-message-square-add bx-xs'></i></span>\n          </div>\n          <div>\n              <i class='bx bx-trash'></i>\n          </div>\n          </div>");
                total += product.price;
            });
            this.totalPrice.innerHTML = "<label> Ksh.".concat(total, " </label>");
        }
        this.cartItem.innerHTML = html; // Clear the existing cart items
    };
    ProductHandler.prototype.addCartItems = function (productId) {
        var product = this.products.find(function (item) { return item.id === productId; });
        if (product) {
            this.cart.push(product); // Add product to cart array
            this.updateCartUI(); // Update UI to reflect cart changes
        }
    };
    return ProductHandler;
}());
// Usage example (assuming you have product data and references to HTML elements)
var productHandler = new ProductHandler(products, mainDiv, cartCount, totalPrice, cartItem);
productHandler.addDataToHtml();
// Add event listener (can be done outside the class)
mainDiv.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-cart')) {
        var productId = event.target.dataset.productId;
        productHandler.addCartItems(productId);
    }
});
