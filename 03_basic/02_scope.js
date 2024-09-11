
//problem yaha pe aata hii.
if(true){
    let a=10
    const b=20
    var c=30
    //c=30//dono same hii.
}

//console.log(a);// a is not defined
//console.log(b);// b is not defined
//console.log(c);//ye access vi karta hii or output vi deta hii.
//yeshiliye var ka paryog nahi karte hii.

let a=300//ye hii global scope 
if(true){
    let a=10
    const b=20
    console.log("INNER: ",a);//ye  hii block/local scope
}
console.log(a);


