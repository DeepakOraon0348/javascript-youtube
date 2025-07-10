const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);//ye over-write nahi hota hii.
console.log(descripter);
//ye esha output deta hii
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }ye hard coded value hii.


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
//yesh parkar hum properties ko define kar sakte hii ki wo constent rahega ya editable hii.
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
}


