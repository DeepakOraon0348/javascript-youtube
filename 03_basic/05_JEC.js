//javascript execution context
//{}->global EC or eshe refer kar diya jata hii this(keyword) varable ke sath 
/**
  1.type of JEC:-
  (a)global exicution contest
  (b)Function Exicution contest
  (c)Eval Exicution contest

  there are two type of phase 
  1.{}->memory creation phase
  2.  ->Exicution pahse
 */
let val1=10
let val2=5
function addNum(num1, num2){
  let total=num1+num2
  return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
/*
1.global exicution->this
2.memory phase{
     val1->undefined
     val2->undefined
     addNum->defination
     result1->undefined
     result2->undefinedf
     //ye hii cycle phase
 }
3.Execution Phase{
    val1->10
    val2->5
    addNum->{new variable environment + execution thread}
    //yeshe new Exicutional contask vi bolte hii

  }
  note:-phir ab addNum ke liye dono phase exicute hoga(memory & Exicution phase)
  for addNum
  1.memory phase{
    val1->undefined
    val2->undefined
    totla->undefined
  }
    2.Execution context{
       val1->10
       val2->5
       total->15//ye total global phase me return ho jaye ga .

    }
  --->call stack->[                ]
                  [   one()        ]    
                  [Global Exicution]
  YE LIFO ME KAM KARTA HII(LAST IN FIRST OUT)
  
 */