// const user = {
//     username: "hetesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database.");
//         //console.log(`Username: ${this.username}`);//this current contest ko batata hii.
//         console.log(this);//  ye current contest me jitna data hii sab print kar deat hii. 
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails()); 
//note:-ye hii object letral.

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}

const userOne =new User("hitesh", 12, true)
const userTwo =new User("ChaiAurCode", 11, false)// ye overwrite kar diya.
//new keyword use karne se ye alag alag dega.
console.log(userOne);
console.log(userTwo);