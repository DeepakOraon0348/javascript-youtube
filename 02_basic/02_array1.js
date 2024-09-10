const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

//marvel_heros.push(dc_heros)//this is not a right way to marge the array.
//eshme array ke andar array create kar deta hii.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//ehsh parkar access karna padta hii.

const newarry=marvel_heros.concat(dc_heros);
//this right way to marge the array.
console.log(newarry);


