// // fetchTodos();

// // async function fetchTodos() {
// //   let users = [];

// //   await fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((response) => response.json())
// //     .then((json) => (users = json));

// //   users.map((user) => {

// //     document.body.style.backgroundColor="grey"
// //     let el = document.createElement("div");
// //     el.style.backgroundColor="grey"
// //     let p1 =  document.createElement("p")
// //     p1.style.backgroundColor="yellow"
// //     let anchor = document.createElement("a")
// //     anchor.href = `https://${user.website}`;
// //     anchor.innerText = `Visit Website`;
// //     p1.innerText=`name: ${user.name},\n email:${user.email},\n address:${user.address.street},${user.address.city},\n ph-No:${user.phone},\n website: `

// //     el.appendChild(p1)
// //     p1.appendChild(anchor)
// //     document.body.appendChild(el)

// //     });
// // }
// ///////////////////////////////////////////////////////////////my code
// fetchuser();

// async function fetchuser() {
//   let users = [];

//   await fetch("https://dummyjson.com/users")
//     .then((response) => response.json())
//     .then((json) => (users = json.users));

//   //mapping user details

//   users.map((user) => {
//     //create elements
//     let el = document.createElement("div");
//     el.id = "div";
//     let p1 = document.createElement("p");
//     p1.id = "p";
//     el.appendChild(p1);
//     document.body.appendChild(el);

//     //mappind 1st name last name
//     p1.innerText = `${user.id}--${user.firstName} ${user.lastName} `;

//     ////create individual details proparties
//     let el2 = document.createElement("div");
//     el2.id = "user_div";
//     let pic_div = document.createElement("div");
//     pic_div.id = "pic_div";
//     el2.appendChild(pic_div);

//     document.body.appendChild(el2);
//     el2.style.display = "none";

//     el2.innerText = `${user.company.name} 
//                     \n ${user.firstName} ${user.lastName} (${user.company.title})
//                     \n Age: ${user.age}, Sex:${user.gender} 
//                     \n Email Id: ${user.email}`;

//     ////onclick-function()
//     p1.addEventListener("click", function () {
//       if (el2.style.display === "none") {
//         el2.style.display = "block";
//       } else {
//         el2.style.display = "none";
//       }
//     });

//     //onclick-function()
//     // p1.addEventListener("click", function () {

//     //   let user_details = null

//     //   fetch("https://dummyjson.com/users/${user.id}")
//     //     .then((response) => response.json())
//     //     .then((json) => (user_details = json.users));

//     //   //create individual details proparties
//     //   let el2 = document.createElement("div");
//     //   el2.id = "user_div";
//     //   let pic_div = document.createElement("div");
//     //   pic_div.id = "pic_div";
//     //   el2.appendChild(pic_div);

//     //   document.body.appendChild(el2);
//     //   el2.style.display = "none";

//     //   el2.innerText=`${user_details.company.name} \n ${user_details.firstName} ${user_details.lastName} (${user_details.company.title}) \n Age: ${user_details.age}, Sex:${user_details.gender} \n Email Id: ${user_details.email}`

//     // });
//   });
// }
// ///////////////////////////////////////////////////////////////////////my code

// // async function fetchEachUser() {
// //   let user_info = [];

// //       await fetch("https://dummyjson.com/users/1")
// //         .then((response) => response.json())
// //         .then((json) => (users = json.user_info));

// //   user_info.map((info)=>{
// //       //create individual details proparties
// //       let el2 = document.createElement("div");
// //       el2.id = "user_div";
// //       let pic_div = document.createElement("div");
// //       pic_div.id = "pic_div";
// //       el2.appendChild(pic_div);

// //       document.body.appendChild(el2);
// //       el2.style.display = "none";
// //       el2.innerText=`${info.co}`

// //   })

// // }

// ///////////////////////////////////////////////////////////
// //chatgpt
// // async function fetchuser() {
// //   let users = [];

// //   // Fetch the users list
// //   await fetch("https://dummyjson.com/users")
// //     .then((response) => response.json())
// //     .then((json) => (users = json.users));

// //   // Iterate through each user
// //   users.map((user) => {
// //     // Create the main user info div
// //     let el = document.createElement("div");
// //     el.id = "div";
// //     let p1 = document.createElement("p");
// //     p1.id = "p";
// //     el.appendChild(p1);
// //     document.body.appendChild(el);

// //     p1.innerText = `${user.id}--${user.firstName} ${user.lastName}`;

// //     // Event listener to show additional details on click
// //     p1.addEventListener("click", async function () {
// //       // Fetch individual user details
// //       const user_details = await fetchUserDetails(user.id);

// //       // Create and display the additional user details
// //       let el2 = document.createElement("div");
// //       el2.id = "user_div";
// //       let pic_div = document.createElement("div");
// //       pic_div.id = "pic_div";
// //       el2.appendChild(pic_div);
// //       document.body.appendChild(el2);

// //       // Toggle visibility of user details
// //       if (el2.style.display === "none" || el2.style.display === "") {
// //         el2.style.display = "block";
// //       } else {
// //         el2.style.display = "none";
// //       }

// //       // Set the text content for the details
// //       el2.innerText = `
// //         Company: ${user_details.company.name}
// //         \nName: ${user_details.firstName} ${user_details.lastName} (${user_details.company.title})
// //         \nAge: ${user_details.age}, Gender: ${user_details.gender}
// //         \nEmail: ${user_details.email}
// //       `;
// //     });
// //   });
// // }

// // // Fetch details of a user by user id
// // async function fetchUserDetails(userId) {
// //   const response = await fetch(`https://dummyjson.com/users/${userId}`);
// //   const data = await response.json();
// //   return data;
// // }

// // fetchuser();  // Call the function to start fetching and displaying users
// // ////////////////////////////////////////chatgpt


/////////////////////////////////////////////////////////////////////////////dada code
window.onload = async function () {
  await fetchAllUsers(); // Ensure users are loaded first
  fetchUserDetailsOnClick(); // Attach event listeners after users exist
  
};
////fetch all users.....

async function fetchAllUsers() {
  let userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.style.display="none"
   

  let users = [];
  await fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => (users = json.users));

  

  let userListDiv = document.getElementById("usersList");
  if (userListDiv) {
    users.forEach((user) => {

      let userDiv = document.createElement("div");
      userDiv.id="userDiv"
      userDiv.style.backgroundColor="green"
      userDiv.classList.add("user_list");
      userDiv.setAttribute("id", user.id);

      userDiv.innerText = `${user.id}  ${user.firstName}`;
      userListDiv.appendChild(userDiv);
    });
  }
}
////fetch each users details

function fetchUserDetailsOnClick() {
  let userDetailsDiv = document.getElementById("userDetails");
  let userListDivs = document.getElementsByClassName("user_list");
  
  if (userListDivs.length > 0) {
    Array.from(userListDivs).forEach((div) => {

      div.addEventListener("click", async function () {

             Array.from(userListDivs).forEach((div_v)=>{
                div_v.style.backgroundColor="green"
             })
             div.style.backgroundColor="blue"
             console.log(userListDivs);
             
          userDetailsDiv.style.display="block"
      

				userDetailsDiv.innerHTML = ""
				
        let user_id = div.getAttribute("id");
        let user_details={};
        await fetch(`https://dummyjson.com/users/${user_id}`)
        .then((response) => user_details = response.json())
        console.log(user_details);
        
				let newDiv = document.createElement("div")
		

        newDiv.id="newDiv"
      
        let img= document.createElement("img")
        img.id="img"
        img.src=user_details.image
        newDiv.appendChild(img)
        let p= document.createElement("p")
        newDiv.appendChild(p)
        p.innerText=`${user_details.id}\n
         ${user_details.firstName}  ${user_details.lastName}\n

         `
				
        userDetailsDiv.appendChild(newDiv)   
      
       
      });
    });
  }
}

///////////////////////////////dada code


let a = 1

console.log("hello " + a); // hello 1
console.log(`hello ${a}`); // hello 1
console.log("hello ".concat(a)); // hello


