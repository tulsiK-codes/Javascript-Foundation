//Array.reduce()

const nums  = [1, 2, 3, 4, 5, 6]
let numReduce = nums.reduce( (acc, currVal) => {
    // console.log(`Accumulator val:${acc} and Current Val:${currVal}`);    
    return acc + currVal
}, 0)
// console.log(numReduce);


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

const priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price), 0)
console.log(`Price to pay for all courses ${priceToPay}`);
