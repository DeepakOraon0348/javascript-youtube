const promiseOne=new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 1000);
})
//note->ye resolve or reject ka kya kam ??
promiseOne.then(function(){
    console.log("Promise consumed");
})           
//note->then ka direct connetion hii resolve ke sath.

//second method
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

//resolve me kaise data send hota hii.
const promiseThree=new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"chai@example.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"hitesh", password: "123"});
        }else{
            reject('ERROR: Something went worng');
        }
    }, 1000);
})

//yeha pe hum shikhenge chaining system
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

//another way to handle the promise
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"javaScript Deepak", password: "123"});
        }else{
            reject('ERROR: JS went worng');
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/DeepakOraon0348');
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers();

//this will do in another way.
fetch('https://api.github.com/users/DeepakOraon0348')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
}).catch((error)=>console.log(error))