// const cname=" Testleaf "
// let trimmedmessage=cname.trim() //removes white space at the start or end of the string
// console.log(trimmedmessage)  //Testleaf


// let cname1="T e s t l e a f"
// let inbetweenspaces=cname1.replace(/\s/g,'')
// console.log(inbetweenspaces)

//Q: extract the id=12345
// let product='Order ID: #12345-Confirmed'

//split-converts string into array
//let splitwords=product.split('')
//console.log(splitwords);

/* [
  'O', 'r', 'd', 'e', 'r', ' ',
  'I', 'D', ':', ' ', '#', '1',
  '2', '3', '4', '5', '-', 'C',
  'o', 'n', 'f', 'i', 'r', 'm',
  'e', 'd'
] */

// let splitwords=product.split(' ') //[ 'Order', 'ID:', '#12345-Confirmed' ]
// console.log(splitwords);

// let splitwords=product.split('#')
// console.log(splitwords)  //[ 'Order ID: ', '12345-Confirmed' ]

// //console.log(splitwords[1]) //['12345-Confirmed']
// let final=(splitwords[1].split('-')) //[ '12345', 'Confirmed' ]
// console.log(final[0]) //12345



// let str='Testleaf'
// //console.log(str.slice(0,4)); //Test
// console.log(str.slice(1))//estleaf
// let str1='Q'+str.slice(1)
// console.log(str1);  //Qestleaf


let strn='Automation testing is exceptionally important'
let words=strn.split(" ") //[ 'Automation', 'testing', 'is', 'exceptionally', 'important' ]
console.log(words);

let longest=""

for (let index = 0; index < words.length; index++) {
    if(words[index].length>longest.length){
     longest=words[index]
    }
  
}
console.log(longest);



