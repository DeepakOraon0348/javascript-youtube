//const tindorUser=new object()//ye singleton technique hii define karne ka.
const tinderUser={}//ye object litral hii.

tinderUser.id="123abc"
tinderUser.name="sanny"
tinderUser.isLoggedIn="false"

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Deepak",
            lastname:"Oraon"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);//agar fullname hoga to wo age karega.
//nahi to nahi jayeg age.

const obje1={1:"a",2:"b"}
const obje2={3:"a",4:"b"}

//const obje3={obje1,obje2}//ye dono ko add karta hii but eshme vi array wala proble rahta hii.
//const obje3=Object.assign({},obje1,obje2)//ye sabko add kar deta hii.
//without curly breaks ke vi same result aata hii.

const obje3={...obje1,...obje2}//ye method har bar use hoga spread.


//console.log(obje3);

const user=[
    {
        id:1,
        email:"deepak@123"
    },
    {

    },
    {

    }
]//yeshe data base se data aata hii.

//user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//ye us object ka sare keys ko array me print kar deta hii.
//ye bahut important hii har jagha use hoga.
console.log(Object.values(tinderUser));//ye sare value ko array ke rup me print karta hii.
console.log(Object.entries(tinderUser));//ye each keys and value ko array me print karta hii. 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//ye check karta hii ye properties hii ya nahi.


