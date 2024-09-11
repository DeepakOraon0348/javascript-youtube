const name="Deepak"
const repoCount =50

//console.log(name + repoCount + "Value" );//->this is not a good way to write.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this is called string interplution
//this is new way to write.

const gameName = new String("Deepak Oraon engineer")

// console.log(gameName[0]);
// console.log(gameName.__proto__);//__proto__ is a mathod

// console.log(gameName.length);//for chec length
// console.log(gameName.toUpperCase());//convert in to Upper case

//console.log(gameName.charAt(2));//us index me kon sa value hii check karne ke liye.
//CharAt() or at() dono method ek hii jaisa hii but CharAt() 0-string.lenth-1 tak value ko return karta hii or out of range wale ko empty.
//at()->ye nagative value ka vi return deta hii.

//console.log(gameName.indexOf('p'));//ye letter kis position pe hii check karne ke liye.
//const newString = gameName.substring(0,4)//esh method ko slice mathod bolte hii.
//console.log(newString);
//note->most important things is all mathod ko study karne ke liye 
//google ke page per inspect kar ke  dekh sakte ho.


 //most important is 
 const anotherString = gameName.slice(-10,4);//slice me humlog nagative value vi de sakte hii.
 console.log(anotherString);
 
 const newStringOne ="  Deepak  ";
 console.log(newStringOne);
 console.log(newStringOne.trim());//.trim extra space ko remove kar deta hii.

 const url="https://deepak.com/hitesh%20choudhary"
 console.log(url.replace('%20','_'));//replace karne ke liye.

 console.log(url.includes('deepak'));//ye element hi ki nahi check karne ke liye.

 console.log(gameName.split(' '));//array me convert karta hii.
 
 
 
 






