function accept(username:string,b:number):string{

    //console.log(username+b)
    return username+b
}

accept("100",12)
console.log(accept("100",12));



//object

//implicit inference
let user={
id:123,
name:"gauthami",
role:"Admin"

}

console.log(user.name);


//explicit inference
let user1:{
    id:number
    name:string
    role:string
}={
    id:321,
name:"gauthami",
role:"Admin"
}

console.log(user1.id);


//custom type can be created type alias

/* type employee={

    id:number
    name:string
    role:string
}

let emp1:employee={

    id:101,
    name:"rekha",
    role:"QA"
}

console.log(emp1);


let emp2:employee={

    id:102,
    name:"anitha",
    role:"dev"
}

console.log(emp2); */



/* 
let apiresponse:any
apiresponse="created"
apiresponse=201
apiresponse=true */


let apiresponse:unknown
apiresponse="created"
apiresponse=201
//apiresponse=true
if(typeof apiresponse==="number"){
console.log(apiresponse+1);
}






function searchcust(name:string,city?:string){

if(city){
    console.log(`user name is ${name} cityname is ${city}`);
}else{
    console.log("user name is", name);
       
}

}

searchcust("roja")
searchcust("roja","chennai")






