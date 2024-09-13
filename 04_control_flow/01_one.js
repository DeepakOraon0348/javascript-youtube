//if->statement

// if(true){
//   // yeha pe ye exicute hoga
// }
// if(false){
//     //yeha pe ye exicute nahi hoga.
// }

const isUserloggedIn=true

// if(2=="2"){
//     console.log("executed");//o/p->executed
// }

// if(2==="2"){
//     console.log("executed");//no execution
// }
/** here some conditional opertor(<,>,<=,>=,!=,===)
 * === ->eshe strict equal vi bolte hii.
 * 
 */

/****************** if-else , statement ******************* */
// const tempreture=41

// if(tempreture === 41){
//     console.log("tempreture is less then 50");
    
// }
// else{
//     console.log("tempreture not less then 50");
    
// }
// console.log("executed");

// const score = 200
// if (score>100) {
//     let power ="fly"
//     console.log(`user power: ${power}`);
    
// }
//console.log(`user power: ${power}`);//ye power not define ka errow  through kare ga.

//const balance = 1000

//if(balance > 500) console.log("test");// yeshe implesit scope .
// if(balance > 500) console.log("test"),
// console.log("test2");//yesh vi likha jata hii.but not readeble.
/**************** Nesting ************ */

// if (balance<500) {
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }

//real world problems if,else if & else.
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}// || ->yshe pipe sign bolte hii. ye conditonal randering hii.



