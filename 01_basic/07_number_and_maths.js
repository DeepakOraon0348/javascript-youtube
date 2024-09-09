const score = 400
console.log(score);

const balance = new Number(100)//new object me define kiya hii jo ki number me hii.
//ya phir apko datatype number me hi chahiye to ap new object ka use kar sakte hii.

console.log(balance);
console.log(balance.toString().length);//ap number ko string me vi convert kar sakte ho esh traha.
//or uske sath sare strig ka proparties use kar sakte ho.
console.log(balance.toFixed(2));//precision value ko fixed karne ke liye.
//jaise ki GST calculation me . E-comers web site me.

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(2));//yeshka range 1-21 tak aap dal sakte ho or ye string value return karte hii.
//jitna apko precize value chahiye uske baad vlue ki ecponential me deta hii.

const hundreds = 1000000
console.log(hundreds.toLocaleString());//ye USA number system me deta hii.




