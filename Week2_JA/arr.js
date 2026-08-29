//let numb=[6,3,9,2]

//ascending order
//console.log(numb.sort()) //[ 2, 3, 6, 9 ]

//let numb=[26,103,99,42]

//console.log(numb.sort())//Expected: [26,42,99,103]
                        //actual result[ 103, 26, 42, 99 ]

//arrow function for ascending

//numb.sort((a,b)=>a-b)  //a=26, b=103 ,26-103=-77 negative it is larger number
//swaps [26,103,99,42] //103-99=4 positive
//[26,99,103,42]//103-42=61
//[26,99,42,103]

//descending order
//numb.sort((a,b)=>b-a) 

//map()-transform every element present array

// let newarr=[1,2,3,4]
// let result=newarr.map((num)=>num*2)
// console.log(result) //[ 2, 4, 6, 8 ]


//filter=used to filter the element you want based on the condition

// let res=newarr.filter((num)=>num>2) 
// console.log(res) //[ 3, 4 ]

//named function
greet()
function greet(){

    console.log('Week2 JA Session')  //Week2 JA Session
}

//function expression


funexp() //ReferenceError: Cannot access 'funexp' before initialization
let funexp=function (){

    console.log('this is a function expression')  //Week2 JA Session
}





