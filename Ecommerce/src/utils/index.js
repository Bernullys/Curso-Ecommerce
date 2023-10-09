//Using ChatGPT:
// export const totalPrice = (cartProductsInShoppingCart) => {
//     const totalCost = cartProductsInShoppingCart.reduce((total, product) => total + product.price, 0)
//     return totalCost
// }

/**
This function will return the sum of the values form an array products of a new order
@param {array} products cartPrduct : Array of Objects
@returns {number} Total price
*/
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}