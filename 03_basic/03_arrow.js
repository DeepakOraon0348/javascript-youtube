const user={
    username: "hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);//this key word current contast ko refer hota hii.
        console.log(this);
        
    }
}

//user.welcomeMessage()
//user.username="sam"//ye current contast hii ye change ho jaye ga.
//o/p->sam, welcome to website
// user.welcomeMessage()

console.log(this);//ye empty object deta hii o/p->{}
