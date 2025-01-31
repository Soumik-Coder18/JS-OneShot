const arr = [1,2,3,4,5]
let newstore=arr.reduce((num1,num2)=>{
    console.log(`Sum: ${num1} and to be added ${num2}`);
    return num1 + num2
},0)
console.log(newstore);

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
const deliveryCharge=50;
let total = shoppingCart.reduce((acc,item)=>acc+item.price,deliveryCharge)
console.log(total);
