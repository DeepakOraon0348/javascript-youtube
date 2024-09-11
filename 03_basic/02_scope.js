
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
    //console.log("INNER: ",a);//ye  hii block/local scope
}
//console.log(a);

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        //console.log(username);
        
    }
    //console.log(website);//ye undefined error through karega.
    two()
    
} 
//one()

if(true){
    const username="Deepak"
    if(username==="Deepak"){
        const website=" youtube"
        //console.log(username+website);
        
    }
    //console.log(website);//ye error through karega not defind ka
    
}
//console.log(username);//ye vi error through karega not defind

//++++++++++++++ Interesting ++++++++++++++
console.log(addone(5))//ye exicute hota hii.

function addone(num){
    return num+1
}

addTwo(5)//ye error through karta hii.Cannot access 'addTwo' before initialization

const addTwo=function(num){//yaha pe addTwo ko expresion vi bola jata hii.
    return num+2
}
//eshe hosting bolte hii.

