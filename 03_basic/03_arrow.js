const user={
    username: "hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);//this key word current contast ko refer hota hii.
        console.log(this);//all contask ko out put karta hii.
        
    }
}

//user.welcomeMessage()
//user.username="sam"//ye current contask hii ye change ho jaye ga.
//o/p->sam, welcome to website
// user.welcomeMessage()

//console.log(this);//ye empty object deta hii o/p->{} , but browser ke andar window object print karta hii

// function chai(){
//     let username="hitesh"
//     //console.log(this);//yeha pe ye global object deta hii.
//     console.log(this.username);//yeha pe ye access nahi deta hii.
//     //undefind output deta hii.
    
// }
// chai()

//++++++++++++ Arrow Function +++++++++++++
// const chai=function(){
//     let username="hetesh"
//     console.log(this.username);
// }// ye undefind output de raha hii.


const chai=()=>{//ye ban gya arrow function.
    let username="hetesh"
    console.log(this.username);
}


//chai()

//syntax of arrow function
//()=>{}

// const addTwo=(num1,num2)=>{//ye basic arrow function hii.
//     return num1+num2//yeshe explisit return type vi bolte hii.
// } 


//const addTwo=(num1,num2)=> num1+num2//ye implisit return function hii.same result deta hii.
//const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=>({username:"Deepak"})//object ko ap karly brecs se app return nahi karsakte hii.

console.log(addTwo(3,4));
