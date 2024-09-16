//foreach loop

const coding = ["js","ruby","jave","python","cpp"];

// coding.forEach(function  (item) {//ye  callbach function hii kisme function name nahi hota hii.

//     console.log(item);
    
// })
//arrow function

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
mycoding.forEach((item)=>{
    //console.log(item);
    console.log(item.languageName);
    
    
})

