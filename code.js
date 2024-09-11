// console.log("hello");
// console.log("hello world");
// console.log("hello3");
let runagain=true;
let email ="maity12@gmail.com"
const login=(input_email)=>{
 return input_email==email?true:false
}
while(runagain){
    let input_email=prompt("enter email : ")
    if(input_email==email){
        alert("login successfil")
        break;
    }
}