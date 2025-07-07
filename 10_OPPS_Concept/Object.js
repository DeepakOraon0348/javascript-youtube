function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2;


// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score){//yeha pe hum pana method or function inject kara rahe hii prototype me.
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log('score is ${this.score}');
}

const chai=new createUser("chai",25);//inject to ho jata hii proto type me but hum jo variable declear kiye hii usme nahi aaye ga.
const tea=new createUser("tea",250);// new kai vi prototype inject karane ke liya use alag batane ke liya use hota hii.

console.log(chai);
console.log(tea); 
chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
