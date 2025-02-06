// // function new_cycle(){
// //     const circle=document.createElement("div");
// //     circle.style.height="30px";
// //     circle.style.width="30px";
// //     circle.style.borderRadius="50%";
// //     circle.style.backgroundColor="red";
// //     let main_div= document.getElementById("main");
// //     main_div.appendChild(circle);

// // }

// // circle.addEventListener('click',function(){
// // new_cycle();
// // })
// let user_number= document.getElementById("eNumber");
// let circle_btn = document.getElementById("circle_btn");
// let squere_btn = document.getElementById("squere_btn");
// let regtangle_btn = document.getElementById("regtangle_btn");
// let clear_all = document.getElementById("clear_all");
// let clear_circle = document.getElementById("clear_circle");
// let clear_squere = document.getElementById("clear_squere"); 
// let clear_regtangle = document.getElementById("clear_regtangle");
// let main = document.getElementById("main");


// //circle_btn
// circle_btn.addEventListener("click", function () {
// for (let i = 0; i < user_number.value; i++) {
//     let el = document.createElement("div");
// el.className = "circle";

//     console.log("hello");
    
//     main.appendChild(el);
// }

// clear_circle.style.display = "grid";

 
// });


// //squere_btn
// squere_btn.addEventListener("click", function () {
//     for (let i = 0; i <  user_number.value; i++) {
//         let el2 = document.createElement("div");
//         el2.className = "squere";   
//         main.appendChild(el2);
        
//     }
//     clear_squere.style.display = "grid";

// });


// //regtangle_btn
// regtangle_btn.addEventListener("click", function () {
//   for (let i = 0; i < user_number.value; i++) {
//     let el3 = document.createElement("div");
//     el3.className = "regtangle";
//     main.appendChild(el3);
    
//   }
//   clear_regtangle.style.display = "grid";
// });


// ///clear_all event
// clear_all.addEventListener("click", function () {
//   while (main.firstChild) {
//     main.removeChild(main.firstChild);
//   }
//   clear_circle.style.display = "none";
//   clear_squere.style.display = "none";
//   clear_regtangle.style.display = "none";
// });


// //clear_circle_event
// clear_circle.addEventListener("click", function () {
//   const circle_classes = main.querySelectorAll(".circle");
//   circle_classes.forEach((circle_class) => {
//     main.removeChild(circle_class);
//   });
//   clear_circle.style.display = "none";
 
  
// });


// //clear_squere_event
// clear_squere.addEventListener("click", function () {
//   const squere_classes = main.querySelectorAll(".squere");
//   squere_classes.forEach((squere_class) => {
//     main.removeChild(squere_class);
//   });
//   clear_squere.style.display = "none";
// });


// //clear_regtangle_event
// clear_regtangle.addEventListener("click", function () {
//   const regtangle_classes = main.querySelectorAll(".regtangle");
//   regtangle_classes.forEach((regtangle_class) => {
//     main.removeChild(regtangle_class);
//   });
//   clear_regtangle.style.display = "none";
// });



// //take input from User... the no of item user ask to enter ,on click that no of squere/circle/regtangle print 














