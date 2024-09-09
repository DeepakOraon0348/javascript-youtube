// Dates

let myDate = new Date()
// console.log(myDate);//2024-09-09T08:00:51.972Z
// console.log(myDate.toString());//Mon Sep 09 2024 08:00:51 GMT+0000
// console.log(myDate.toDateString());//Mon Sep 09 2024
// console.log(myDate.toLocaleString());//9/9/2024, 8:00:51 AM
// console.log(typeof myDate);//ye interview me puchhta hii->object(o/p)

// let myCurrentDate = new Date();// ye current date nahi deta hii.
// console.log(myCurrentDate.toDateString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2023,0,23,5,3)//ye time vi deta hii.
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2023,01,23")//ye dd//mm//yyyy ke formate me leta hii.
//console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()//ye milli second me deta hii 1 jan 1970 se
//console.log(myTimeStamp);//1725870223596
//console.log(myCreatedDate1.getTime());//1674432000000

//console.log(Math.floor(Date.now()/1000)); //ye mathod second me deta hii.
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);//month lene ke liye.
console.log(newDate.getDay());//day calculate karne ke liye.


newDate.toLocaleString('default',{
    weekday:"long"
})








