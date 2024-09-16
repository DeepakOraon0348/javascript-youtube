//const coding = ["js","ruby","jave","python","cpp"];

// const value=coding.forEach((item)=>{
//     console.log(item);//return ->undefined
//     return item;//
    
// })

// console.log(value);//return ->undefined ye value return nahi karta hii.

const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num)=>num>4)
const newNums=myNums.filter((num)=>{
    return num>4
})

console.log(newNums);
