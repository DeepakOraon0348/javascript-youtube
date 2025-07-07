// let myName = "hitesh       "
// let mychannel = "chai     "

// console.log(myName.trueLength);

 let myHeros = ["thor","spiderman"]

 let heroPower  = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log('Spidy power is ${this.spiderman}')
    }
 }

 Object.prototype.hitesh=function(){
    console.log(`hetesh is present in all objects`);
 }

 Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
 }

 //heroPower.hitesh();
//  myHeros.hitesh();//yes we created our own prototype method.
//  myHeros.heyHitesh();
 //heroPower.heyHitesh();//ye hum access nahi kar sakte hii becouse ye ek object hii.

 //inheritance

 const User = {
    name:"chai",
    email: "chai@google.com"
 }

 const Teacher = {
    makeVideo:true
 } 

 const TeachingSupport = {
    isAvailable: false
 }

 const TASupport={
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
 }
 
 Teacher.__proto__=User;//this is called inheritance

 //modern syntax
 Object.setPrototypeOf(TeachingSupport, Teacher);//this methos to inherite other's property

 let anotherUsername="ChaiAurCode     "

 String.prototype.tureLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
 }

 anotherUsername.tureLength()
"hitesh".tureLength();
"iceTea".tureLength();