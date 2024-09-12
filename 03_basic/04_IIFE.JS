//Immediately Invoked Funtion Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()//ye basic hii.
(function chai(){
    console.log(`DB CONNECTED`);
    
})();//YE HI IIFE or yeshe end vi karna padtahii,yshe ptanahi hotahii.
//nahi to errow through karega.dusra IIFE KO EXICUTE NAHI HENE DEGA.
//interview ke liye->global scope ke pulution se proble hoti
//hii kai bar to uske pulution ko hatane ke liye use karte hii.

// (function ourcode(){
        // ye name IIFE HII
//     console.log(`DB CONNECTED TWO`);
    
// })();

// (()=>{
//     console.log(`DB CONNECTED TWO`);
    
// })();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Deepak");

