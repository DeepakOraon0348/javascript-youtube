//Array
//[]->squar breaket,()->prenthesis,[]->breaket,{}->breses/curly bress
const myArr = [0,1,2,3,4,5,"Deepak"];//ye ek object type hii.

console.log(myArr[6]);//array ko hum esh parkar aceses kar sakte hii.
//array always start from 0 index. or esh me diffrent data type ka value vi rakh sakte hii.
const myHrors =["shaktiman","naagraj"]

const myArr2= new Array(1,2,3,4)//array ko hum yeshe vi declear kar sakte hii.
console.log(myArr2[1]);


//Array Methods
// myArr.push(6)//ye method push karta hi element ko in array me.
// myArr.push(7)
// myArr.pop()//ye method pop karta hii element ko from array se.
//myArr.unshift(9)//ye method 0th position me element ko sift karta hii.without changing the other element.
//myArr.shift()//ye method pop ki traha hii hai,ye remove karta hii 0th position ko.

//console.log(myArr.includes(9));//ye questioner method hi ye answer karta hii boolen me.
//console.log(myArr.indexOf(5));//ye index batata hii.

//const newArr=myArr.join()//ye all element ko add kar deta hii string ke form me ex-0.1.2.3..
//yeshka typeof ->string deta hii.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//+++++++++ Slice, splice  ++++++++

console.log("A",myArr);

const myn1=myArr.slice(1,3)//ye array ko todta hii.
//yeshme end point(3)ko print nahi karta hii. ex->[ 1, 2 ]
console.log(myn1);

console.log("B",myArr);
 
const myn2=myArr.splice(1,3)//ye end range ko to print karta hii. ex->[ 1, 2, 3 ]
//uske sath orginal array ko vi manuplate karta hii ex-> c [ 0, 4, 5, 'Deepak' ]
console.log("c",myArr);
console.log(myn2);






