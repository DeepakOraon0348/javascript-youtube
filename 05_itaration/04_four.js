const myObject={
    js:'javascript',
    cpp:'c++',
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
     //console.log(myObject[key]);
     //console.log(myObject[key]);
     //console.log(`${key} shortcut is for ${myObject[key]}`);
     
}
//array in forin loop
const programing = ["js","rb","py","java","cpp"]

for (const key in programing) {
     //console.log(key);//ye only key de raha hii
    //console.log(programing[key]);
    
}

const map = new Map()//map non-itarative hii.
map.set("IN",'India')
map.set("USA","United States of America")
map.set("Fr","frence")
map.set("IN",'India')

// for (const key in map) {
//      console.log(key);
     
// }