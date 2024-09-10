const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

//marvel_heros.push(dc_heros)//this is not a right way to marge the array.
//eshme array ke andar array create kar deta hii.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//ehsh parkar access karna padta hii.

const newarry=marvel_heros.concat(dc_heros);
//this right way to marge the array.
//console.log(newarry);

//++++++ spread method +++++
const all_new_heros=[...marvel_heros,...dc_heros]
// each array value ko sprid kar deta hii.
//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6,],7,[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity)
//flat method sab defth array ko concat kar deta hii.
console.log(real_another_array);

console.log(Array.isArray("Deepak"));//array hii ya nahi pata karne ke liye.
console.log(Array.from("Deepak"));//kisi vi string ya object ko array me convert karne ke liye.
console.log(Array.from({name:"deepak"}));//ye interesting hii interview prosfective se .
//ye impty array deta hii directly convert nahi kar pata hii.

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,scor));






