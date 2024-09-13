//const userEmail = "Deepak.ai"//ye true hii eshme execute hota hi o/p->Got user email
//const userEmail=""//ye false value dega o/p->Don't have user email.
// const userEmail = []//ye vi true value dega.
// if (userEmail) {
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }
//YE interview me puchh jata hii.
/*falsy value-> false,0,-0,BigInt 0n,"",null,undefined,NaN->YE SAB FALSY VALUE HII*/

/*Truthy values->"0","false"," " ,[],{},function(){}*/

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }//ye array ko execute karne ka tarika.

// const emptyObj = {}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }

//Nullish Coalescing operator (??): null undefined

let val1;
//val1= 5 ?? 10//o/p->5
//val2= null ?? 10//o/p->10
//val1 = undefined ?? 15//o/p->15
val1=null ?? 10 ?? 20//o/p->10

console.log(val1);


//Terniary Operator
//condition ? true :false

iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 86") : console.log("more than 99");

