const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 1500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log('Total products cost:', totalPrice);


//Shopping Cart
const cart = [
    { name: 'laptop', price: 60000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3000, quantity: 3 },
    { name: 'phone', price: 50000, quantity: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log('Total shopping cart cost:', cartTotal);