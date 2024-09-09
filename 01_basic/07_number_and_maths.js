const score = 400
//console.log(score);

const balance = new Number(100)//new object me define kiya hii jo ki number me hii.
//ya phir apko datatype number me hi chahiye to ap new object ka use kar sakte hii.

// console.log(balance);
// console.log(balance.toString().length);//ap number ko string me vi convert kar sakte ho esh traha.
//or uske sath sare strig ka proparties use kar sakte ho.
//console.log(balance.toFixed(2));//precision value ko fixed karne ke liye.
//jaise ki GST calculation me . E-comers web site me.

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(2));//yeshka range 1-21 tak aap dal sakte ho or ye string value return karte hii.
//jitna apko precize value chahiye uske baad vlue ki ecponential me deta hii.

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//ye USA number system me deta hii.
// console.log(hundreds.toLocaleString('en-IN'));//YE indian number system me deta hii.

//+++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));//aap round up me le sakte ho.
// console.log(Math.ceil(4.9));//uper value deta hii.
// console.log(Math.floor(4.9));//ye lower value deta hii.
// console.log(Math.min(4,3,6,8));//ye array ka min value deta hii
// console.log(Math.max(4,3,6,8));//ye array ka max value deta hii.


console.log(Math.random());//random [0-1] ka beech ka value deta hii.
console.log((Math.random()*10)+1);//value 1 se bada lene ke liye.
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min);
//app esh traha min max ke range le sakte hii value.










