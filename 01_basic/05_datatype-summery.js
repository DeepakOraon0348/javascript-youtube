//Primitive

//7 atypes:string ,Number,Boolean,Null,Undefined,Symbol,BigInt
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let useEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);
const bigNumber=34564546547981n



//Reference (Non primitive)

//Array,Objects,Functions
//1.Array
const heros=["shaktiman","naagraj","doga"];

//object
let myobj={
    name:"Deepak",
    age:22,
}

//functions
const myFunction=function(){
    console.log("Hello world")
}

//funtion for check the data type is
//console.log(typeof heros);

/***************memory manegement*********** */

//Stack(Primitive){jo vi memory define hogauska ek copy milega},
//Heap(Non-Primitive){jo vi value denge uska original value change hoga}
// let myName="Deepak"
// let otherName=myName
// otherName="Rahul"

// console.log(myName)
// console.log(otherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="Deepak@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)