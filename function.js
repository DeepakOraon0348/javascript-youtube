// function myFunction(){
//     console.log("Welcome to javascript series");
//     console.log("Code with Deepak");
// }

// myFunction();

/******************Using parameter or argument************** */
// function MyFunction(msg){
//     //parameter -> input
//     console.log(msg);
// }

// MyFunction("I love js code to code any thing");

// function sum(x,y){
//     console.log(x+y);
// }
/****************************Using return libarary key********* */
// function sum(x,y){
//     s=x+y;
//     return s;
// }

// let val=sum(4,3);
// console.log(val);

/*********************Arrow Function*********************/
// const sum=(a,b)=>{
//     return a+b;
// }
// const mul=(a,b)=>{
//     return a*b;
// }

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(
//             char==="a" || char==="e" || char==="i" || char==="o" ||char==="u"
//         ){
//             count++;
//         }

//     }
//     console.log(count);
// }

/********************************for each loop in array******************** */
// let arr=["pune","delhi","mumbai"];

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

// let arr=["pune","delhi","mumbai"];

// let calcSqare((val)=>{
//     console.log(val.toUpperCase());
// });

// arr.forEach(calcSqare);

/**************repeat************** */
// let nums=[67,52,39];

// let calcSqare=(num)=>{
//     console.log(num*num);
// };

// nums.forEach(calcSqare);

/**********************map method***************** */
// let nums=[67,52,39];

// let newArr=nums.map((val)=>{
//     return val;
// });
// console.log(newArr);
/************************filter*********************** */
// let arr=[1,2,3,4,5,6,7];

// let evenArr=arr.filter((val)=>{
//     return val%2==0;
// });

// console.log(evenArr);

/***************************find largest value**************** */
let arr=[5,6,2,1,101,3];
const output=arr.reduce((prev,curr)=>{
    return prev>curr? prev : curr;
});

console.log(output);