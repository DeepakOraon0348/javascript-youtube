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
console.log(typeof heros);