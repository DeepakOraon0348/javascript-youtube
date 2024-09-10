//singleton
//object.create


//object literals
//symbol declaration

const mySym=Symbol("key1")


//object creation
const JsUser={
    name:"Deepak",
    "full name":"Deepak Oraon",
    [mySym]: "mykey1",//symbol yese declear hota hii object me.
    age:18,
    location:"Seraikella",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}//object ko allwas uske key ke though access kiya ja sakta hii.
//object me keys and value hota hii.

//object access technique
//console.log(JsUser.email);
//console.log(JsUser["email"]),//ye jab key string me diya jata hii tab 
//usko esh parkar access kiya jata hii.
// console.log(JsUser["full name"]);
// console.log( typeof mySym);//ye symbol hii
// console.log(typeof JsUser[mySym]);//yesh symbol ke andar string value hii.
//ye interview question hii.
//console.log(JsUser);


JsUser.email="hitesh@chatgpt.com"//alwas . ka hi use karna chahiye.
//Object.freeze(JsUser)//object ko freeze(lock) karne ke liye.object.freeze ka paryog karte hii.
JsUser.email="hitesh@chatgptDeepak.com"
JsUser.name="hitesh kumar"
JsUser["full name"]="Rahul kumar"
//console.log(JsUser);
//note steing interplution->backtrik(``)

JsUser.greeting=function(){
    console.log("Hello js user");

}

JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}
//this se object ko refere karte hii.
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());













