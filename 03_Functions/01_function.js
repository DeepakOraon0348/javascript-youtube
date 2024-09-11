
function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");    
}//here funtion defination
//funtion->data type,number1 or number2->paramiter,


//sayMyName()//sayMyName->ye reference hii. sayMyName()->ye exicute  hii.
//sayMyName->o/p is empty. //sayMyName() eshme output milta hii.

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwoNumber()//o/p->NaN.
// addTwoNumber(3,4);//o/p->7. or 3 and 4 are called argument.

//but problem is here
// addTwoNumber(3,"4")//o/p->34
// addTwoNumber(3,"a");//o/p->3a
// addTwoNumber(3,null)//o/p->3.

function addTwoNumber(number1,number2){
     let result=number1+number2
     return result;//return ke baad koi code exicute nahi hota.
    //return number1+number2;
}

const result = addTwoNumber(3,5)
//console.log("Result: ",result);//result->undefined hi becouse function koi return nahi kar raha hii.

function loginUserMessage(username="sam"){//ye empty value me under nahijayega.
    //return `${username} just logged in`
    //if(!username)//dono ka same kam hii.
    if(username===undefined){
        console.log("please enter a username");
        return
        
    }
}

// loginUserMessage("hitesh")//no result becouse return value ko kahi store nahi kar rahe hii.
// console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage());//o/p->undefind,undefined just logged in

//+++++++ use of if statement++
//function me multiple value kaise pass hoti hii.
// 

//+++ ye interview me puchta hii.
function calculateCartPrice(val1,val2,...num1){
    return num1
} //o/p->[ 400, 500 ]

//console.log(calculateCartPrice(200,300,400,500));//then o/p->[ 200, 300, 400 ]
//+++++++++++ object ko function me kaise likhte hii.
const user={
    username:"hitesh",
    prices:199//so type script is very important
}

function handleObject(anyobject){
    console.log(`usrname is ${anyobject.username} and price is ${anyobject.price}`);

    
}
//handleObject(user);
//other way to call object
handleObject({
    username:"Deepak",
    price:399
})
//++++++++ Array ko kaise call karte hii in function me.
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}//o/p->400

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));//both are same.




