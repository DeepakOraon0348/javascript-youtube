//reduce ->ye shoping card me use hote hii.ye react me vi use hota  hii.
const myNums=[1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){

//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)//ye zero accumlater ka value hii.
// console.log(myTotal);

//ab arrow function me try karenge 
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);


const shoppingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 9999
    },
    {
        itemName: "dev course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price, 0)
console.log(priceToPay);
