// //adding students
let runagain = true;
const students = [];
const delete_student = [];
std_id = 1;

function addStudent(name, phno, email, std_id) {
  const student = {
    name: name,
    phno: phno,
    email: email,
    std_id: std_id,
  };
  std_id++;
  students.push(student);
}

// addStudent("soudip maity", 7908004118, "maity12@gmail.com",1);
// addStudent("mistu maity", 9876543210, "mistu@gmail.com",2);
// addStudent("rintu maity", 9876123412, "rintu@gmail.com",3);

// console.log(students[0].name);
// console.log(students[1].email);
// console.table(students)

////option
console.log("1. show student list.....");
console.log("2. show student details......"); // input id=> then show details
console.log("3. add new students.....");
console.log("4. update a student details......");
console.log("5. remove a student......");
console.log("6. show delete student....");
console.log("7. quit....");



while(runagain){

let choice=prompt("enter a option.....")

if(choice==1){
  console.table(students);
}


else if(choice==2){
    let ask_id=prompt("enter student id .....")
    if(ask_id==students[ask_id-1].std_id){
        console.table(students[ask_id-1]);
    }
    
    else{
        console.log("enter valid student id....");

    }
}


else if(choice==3){
    let name=prompt("enter name...")
    let phno=prompt("enter phone number.....")
    let email=prompt("enter email.....")
    addStudent(name,phno,email,std_id++)

    console.table(students);
   
}



else if (choice==4){
    let ask_id=prompt("enter your id....");

    let ask_upd=prompt("which one do you want to update ?...1=>name...,2=>phno..,3=>email...");
    
    if(ask_upd==1){
        let upd_name=prompt("enter a name....");
        students[ask_id-1].name=upd_name
        console.table(students[ask_id-1]);
    
    }
    if(ask_upd==2){
        let upd_phno=prompt("enter phone number...");
        students[ask_id-1].phno=upd_phno
        console.table(students[ask_id-1]);


    }
    if(ask_upd==3){
        let upd_email=prompt("enter email...");
        students[ask_id-1].email=upd_email
        console.table(students[ask_id-1]);
        
        
    }

    else{
        console.log("enter valid option!!!");
        
    }

}


if(choice==5){
    let ask_id=prompt("enter a id to delete...");
    if(ask_id==students[ask_id-1].std_id){
        delete_student.push(students[ask_id-1])
        students.pop(students[ask_id-1]);
        console.table(students)
       
    }
    else{
        console.log("enter valid id.....");
        
    }
}



if(choice==6){
    console.table(delete_student)
}

}



