// console.log("hello");
// console.log("hello world");
// console.log("hello3");
let runagain=true;
let email ="maity12@gmail.com"
let password="maity"
const login=(input_email)=>{
 return input_email==email?true:false
}
while(runagain){
    let input_email=prompt("enter email : ")
    if(input_email==email){
        
        break;
    }
}
const login_password=(input_password)=>{
 return input_password==email?true:false
}
while(runagain){
    let input_password=prompt("enter password : ")
    if(input_password==password){
        alert("login successfil")
        break;
    }
}
