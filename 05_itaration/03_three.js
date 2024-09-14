//for of->ye spcefic array liye hota hii.
//array & object ye js ke liye bahut hii power full hote hii.


// ["","",""]
// [{},{},{}]

const arr = [1 ,2 ,3 ,4 , 5]

for (const num of arr) {
    //console.log(num);
    
}
const greetings = "Hllo World"
for(const greet of greetings){
   // console.log(`Each char is ${greet}`);
    
}

//maps->eshme unique value hota hii.

const map = new Map()
map.set("IN",'India')
map.set("USA","United States of America")
map.set("Fr","frence")
map.set("IN",'India')//unique value jati hii eshki andar
//console.log(map);//'IN' => 'India',
                 //'USA' => 'United States of America',
                 //'Fr' => 'frence'
//eshe loop me kar ke dekhenge.
for (const key of map) {
    console.log(key);
    
}//o/p->[ 'IN', 'India' ]
        // [ 'USA', 'United States of America' ]
        // [ 'Fr', 'frence' ]

for (const [key,value] of map) {//yeha pe array de-structure kar diya gya hii

    //console.log(key,':-',value);      
}

const myObject ={
    'game':'NFS',
    'game':'Spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// }//yeha pe error through karta  hii->myObject is not iterable
