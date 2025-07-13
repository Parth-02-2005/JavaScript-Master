const arr = [1,2,3,4,5]
let result = arr.reduce((acc, val) => acc + val, 0)

console.log(result);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, value) => {
    return acc + value.price
}, 0)

console.log(priceToPay);



