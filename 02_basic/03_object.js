//singleton
//object.create


//object literals
//object creation
const JsUser={
    name:"Deepak",
    "full name":"Deepak Oraon",
    age:18,
    location:"Seraikella",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}//object ko allwas uske key ke though access kiya ja sakta hii.

//object access technique
console.log(JsUser.email);
console.log(JsUser["email"]);//ye jab key string me diya jata hii tab 
//usko esh parkar access kiya jata hii.
console.log(JsUser["full name"]);


