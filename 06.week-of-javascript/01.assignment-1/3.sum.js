// 3. Sum
// Imagine you have a shopping cart with various items. Each item has a price, and you 
// want to know the total cost of everything in the cart.
// e.g. item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]

let items = [
    { price: 10.99 },
    { price: 6.99 },
    { price: 15.99 },
    { price: 19.99 }
]
let total_price=0

for (let p of items) {
    total_price=total_price+p.price
}

console.log(total_price)