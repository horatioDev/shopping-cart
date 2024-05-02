/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const product1 = {
  "name": "Cherries",
  "price": 3,
  "quantity": 0,
  "productId": 1,
  "image": "./images/cherry.jpg"
};
const product2 = {
  "name": "Oranges",
  "price": 1.50,
  "quantity": 0,
  "productId": 2,
  "image": "./images/orange.jpg"
};
const product3 = {
  "name": "Strawberries",
  "price": 1.50,
  "quantity": 0,
  "productId": 3,
  "image": "./images/strawberry.jpg"
};

const testProduct = {
  "name": "Pineapples",
  "price": 1.50,
  "quantity": 0,
  "productId": 6,
  "image": "../images/strawberry.jpg"
};
products.push(product1);
products.push(product2);
products.push(product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = (productId) => {
  // Find product
  const product = products.find(p=> p.productId === productId);
  if(!product) return false;
  
  // Product in cart
  const cartItem = cart.find(item => item.productId == productId);
  !cartItem ? (product.quantity++,cart.push(product)) :     ++product.quantity;
  return true;
};
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = (productId) => {
  // Find product
  const product = products.find(p=> p.productId === productId);
  // Product not found - Increase quantity
  !product ? false : (product.quantity++, true);
};
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = (productId) => {
  // Find product
  const product = products.find(p=> p.productId === productId);
  if(!product) return false; // Product not found

  // Decrease quantity
  product.quantity--;

  // Remove product from cart if quantity is zero
  if(product.quantity === 0) return cart.splice(cart.findIndex(item => item.productId === productId), 1);

  return true; //  Successfully decreased
};
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/const removeProductFromCart = (productId) => {
  // Find product
  const product = products.find(p=> p.productId === productId);
  if(!product) return false; // Product not found

  // Product in cart
  const cartItem = cart.find(item => item.productId == productId);

  if(cartItem) return (product.quantity = 0, cart.splice(cart.findIndex(item => item.productId === productId), 1));
};
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
const cartTotal = () => {
  // Variable to hold cart total
  let sum=0;

  // Iterate through cart
  cart.forEach(cartItem => {
    let productTotal = cartItem.quantity * cartItem.price;
    sum += productTotal
    console.log(cartItem.name, cartItem.price, cartItem.quantity, productTotal, sum)
  })
  return sum
};
/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = () => {
  return cart.splice(0,cart.length);
};
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
const pay = (amount) => {
  // Calculate the total cost of the items
  console.log(amount-cartTotal())
  return amount - cartTotal();
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
const currency = (amount, fromCurrency, toCurrency) => {
  // Conversion Rates
  const conversionRates = {
    USD: { EUR: 0.93, JPY: 153.43 },
    EUR: { USD: 1.07, JPY: 164.77 },
    JPY: { USD: 0.0065, EUR: 0.0061 }
  }
  if(fromCurrency===toCurrency) return amount; // No conversion needed

  // Get rate
  const rate = conversionRates[fromCurrency][toCurrency];
  console.log(rate)
  if(!rate) return 'Conversion not supported'; // Conversion not supported

  // return conversion
  return amount * rate;
};
console.log(currency(100, 'USD', 'EUR')); // Convert 100 USD to EUR
console.log(currency(100, 'EUR', 'USD')); // Convert 100 EUR to USD
console.log(currency(1000, 'USD', 'JPY')); // Convert 1000 USD to JPY
console.log(currency(1000, 'JPY', 'USD')); // Convert 1000 JPY to USD

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
