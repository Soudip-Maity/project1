///////////////q1
// let num = 123456789;
// let result = num.toString().split('').reverse().join('');
// console.log(result);

// //////////////////////////////////////////////////////////////
// //q2

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function sum_num(limit) {
//     let primeSum = 0;
//     let nonPrimeSum = 0;

//     for (let i = 1; i <= limit; i++) {
//         if (isPrime(i)) {
//             primeSum += i;
//         } else {
//             nonPrimeSum += i;
//         }
//     }

//     console.log("Sum of prime numbers: " + primeSum);
//     console.log("Sum of non-prime numbers: " + nonPrimeSum);
// }

// let limit = 10;
// sum_num(limit);

//////////////////////////////////////////////////////////////////
//q6

// let phno

// let num = 5

// for(let i=1;i<=num-2;i++){
//     let pattern=''
//     for(let j=1;j<=i;j++){
//         if(j=i){
//             pattern+=j
//         }

//     }
//     console.log(pattern);
// }

////////////////////////////////////
//q5
// let num = 12345689;

// function is_good(num) {
//     let result = num.toString().split('')
// for (let i=result[0];i<=result[result.length];i++){
//     console.log(i);

// }
// }

// is_good(num);

////////////////////////////////////////

// const students = [
//   { id: 1, name: "Rohit", class: 12, email: "rohit@gmail.com" },
//   { id: 2, name: "virat", class: 12, email: "virat@gmail.com" },
//   { id: 3, name: "gg", class: 12, email: ""},
//   { id: 4, name: "dhoni", class: 12, email: "dhoni@gmail.com" },
// ];

// const authors = [
//   { id: 1, name: "Bumrah", is_alive: true },
//   { id: 2, name: "rana", is_alive: false },
//   { id: 3, name: "Bubi", is_alive: true },
//   { id: 4, name: "kapil", is_alive: false },
//   { id: 5, name: "rana", is_alive: true },
// ];

// const book = [
//   {
//     id: 1,
//     title: "Cricket Book",
//     author_id: 1,
//     page_count: 100,
//     written_year: 2021,
//     publish_year: 2022,
//   },
//   {
//     id: 2,
//     title: "football Book",
//     author_id: 2,
//     page_count: 200,
//     written_year: 2020,
//     publish_year:2020,
//   },
//   {
//     id: 3,
//     title: "kabaddi Book",
//     author_id: 3,
//     page_count: 600,
//     written_year: 2022,
//     publish_year: 2024,
//   },
// ];

// const book_collection = [
//   { id: 1, book_id: 1, student_id: 1 },
//   { id: 2, book_id: 2, student_id: 3 },
//   { id: 3, book_id: 3, student_id: 2 },
// ];


////////////////////////////////////////////////////
// const at = [];
// authors.map((a) => {
//   if (!at.includes(a.name) && a.is_alive) {
//     at.push(a.name);
//   }
// });
//  console.log(at);
//////////////////////////////////////////////////////

// console.log(authors.map((a)=>(a.name))); // to map all name from author table a= value para meter
// students.map((name)=>{
//             console.log(name.name);
//             });






// const bookIdsOver500Pages = book.filter(b => b.page_count > 500).map(b => b.id);

// const studentIdsWithBooks = book_collection
//     .filter(bc => bookIdsOver500Pages.includes(bc.book_id))
//     .map(bc => bc.student_id);

// const studentsWithLargeBooks = students.filter(s => studentIdsWithBooks.includes(s.id));

// console.log(studentsWithLargeBooks.map(s => s.name));


// console.log(bookIdsOver500Pages);
//////////////////////////////////////////////////////////
//Q1

///who borrow books

// const studentIdsWithBooks = book_collection. map(a=>a.student_id);
// const studentsName = students.filter(b=>studentIdsWithBooks.includes(b.id));
// console.log(studentsName.map(b=>b.name));

///who dont borrow
// const studentIdsWithBooks = book_collection. map(a=>a.student_id);
// const studentsName = students.filter(b=>!studentIdsWithBooks.includes(b.id));
// console.log(studentsName.map(b=>b.name));


//Q2
///////////authored and published in the same year
//1st
// const sameYear_wp_book= book.filter(a=>a.written_year==a.publish_year).map(a=>a.title);
// console.log(sameYear_wp_book);

//2nd
// const bookList = [];
// book.map((a) => {
//   if (!bookList.includes(a.title) && a.written_year==a.publish_year) {
//     bookList.push(a.title);
//   }
// });
//  console.log(bookList);
/////////////////////////////////////


//Q3
///student without email
// const student_WithOut_Email= students.filter(a=>!a.email  ).map(a=>a.name);
// console.log(student_WithOut_Email);

// const nameList = [];
// students.map((a) => {
//   if (!nameList.includes(a.name) && !a.email ) {
//     nameList.push(a.name);
//   }
// });
//  console.log(nameList);

/////////////////////////////////////
///Q4
//authors who have not authored any book
// const authorids = book.map(a=>a.author_id);
// const authorsWith_No_Book= authors.filter(b=>!authorids.includes(b.id)).map(b=>b.name);
// console.log(authorsWith_No_Book);


////////////////////////////////
//Q5
// identify the books that are unpiublished and authors are dead
// const deadAuthorids = authors.filter(a=>!a.is_alive).map(a=>a.id);
// const upBooks= book.filter(b=>deadAuthorids.includes(b.author_id) && b.publish_year==null).map(b=>b.title);
// console.log(upBooks);

/////////////////////////////////////////////
// //q6
// //identify the student who borrowed books published in  2024 or after 2024

// const bookid= book.filter(b=>b.publish_year>=2024).map(b=>b.id);
// const studentIdsWithBooks = book_collection.filter(a=>bookid.includes(a.book_id)).map(a=>a.student_id);
// const studentsName= students.filter(c=>studentIdsWithBooks.includes(c.id)).map(c=>c.name)
// console.log(studentsName);

//////////////////////////////////////////////////////
//Q7
// // I have an array of users, i want the names of all users who have phone number and his name is unique in the list

// let arr = [
//   { name: "soudip", phno: 987654321 },
//   { name: "mistu", phno: 1234567890 },
//   { name: "rintu", phno: 234567876 },
//   { name: "mamai", phno: null },
//   { name: "mistu", phno: 1234554321 },
// ];

// const nameList =[];
// arr.map((a)=>{
//   if(!nameList.includes(a.name) && a.phno!=null ){
//     nameList.push(a.name);
//   }
// });
// console.log(nameList);



///////////////////////////////////////////////
//Take 3 users' birth and death year. If the death year is not given then the user is alive. Find how many years they lived all together


// let arr = [
//     { name: "soudip", birthdate: 2000, deadDate : null },
//     { name: "mistu", birthdate: 2003 , deadDate : 2040 },
//     { name: "rintu", birthdate: 2010,  deadDate : 2045 }
// ]
// const current_year = 2050;



//////////////////////////////////////////////////////////

//List students who have borrowed books authored by multiple writers


// const bookWithMultiAuthor = book.filter(a=>a.author_id.length>=2).map(a=>a.id);
// const student_id_With_Multi_Author = book_collection.filter(b=>bookWithMultiAuthor.includes(b.book_id)).map(b=>b.student_id);

// const student_With_Multi_Author = students.filter(c=>student_id_With_Multi_Author.includes(c.id)).map(c=>c.name);

// console.log(student_With_Multi_Author);
// Display all books along with the names of their authors

// const booklist = book.map(a=>a.title);
// const authorids = book.map(b=>b.author_id);
// const authorNames= authors.filter(c=>authorids.includes(c.id)).map(c=>c.name);
// console.table(booklist,authorNames);

////////////////////////////////////////////////////////////

// list of the student along with the author of the book they borrowed

// const student_id_with_book = book_collection.map(a=>a.student_id);
// const book_id= book_collection.map(c=>c.book_id);

// const studentList = students.filter(b=>student_id_with_book.includes(b.id)).map(b=>b.name);
// const bookList = book.filter(d=>book_id.includes(d.id)).map(d=>d.title);
// console.log(studentList,bookList);
 

    



// let arr = ["aaa","sss",123,"qqq","www","eee","rrr","ttt","uuu","iii"]

// let x= arr.lastIndexOf("qqq")
// console.log(x);

// let user_input = prompt("enter a itme  : ")
// let sum=0;
// arr.forEach(element => {
//  if (element==user_input) {
//   sum++

  
//  } else {
//   console.log("enter valid itme ");
  
//  }
  
// });
// console.log(sum);
// let sum=0; 
// arr.forEach(element => {
//   if (element==user_input) {
//    for(let i=0; i<=arr.indexOf(user_input);i++){
//     sum+=i
//    }
    
//   }
// });
// console.log(sum);



// if (user_input>arr.length) {
//   console.log("enter valid number ");
  
// } else {
  
//   console.log(arr.slice(user_inputarr.length));
  
// }

// take an array, take input from user (n). show item in position 'n' from last 
// take an array, take input from user (n). show last 'n' elements
// take an array, take input from user (n). show number of time the item is present in that array
// take an array, take input from user (n). show position of last presence of 'n'. eg: ['a', 'b', 'c', 'a', 'e'] input 'e' output 4 
// take an array, take input from user (n). show sum of positions of 'n'
// take an array mix of number and alphabet, create 1 array of numbers and 1 array of alphabet from this array.
// take an array, take input from user (n). show all items which are greater than 'n', less than 'n', equal to 'n'
// take an array mix of number and alphabet, update the array by - double each number and remove alphabets


//////////////////////////q2
// let arr = [1,[2,[3,[4]]]];


// let new_arr=arr.flat(arr.length+1);
// console.log(new_arr);


//////////////////////////////////q1
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 }
// ];

// let names = []
// users.map((a)=>{
//   if (a.age>18) {
//     names.push(a.name);
//   }
// }
// )
// console.log(names);

/////////////////////////////////q3
// let numbers = [1,2,3,4,5,6];

// let even=0;
// let odd=0;

// for(let i=0;i<numbers.length;i++){

//   if (i%2==0) {
//     even++
    
//   }else{
//     odd++
//   }
// };



// console.log(even);
// console.log(odd);

//////////////////////////////////////////q5


// const arr1 = [1, 2, 3,4];
// const arr2 = [2, 3, 4];



// const commonItems = arr1.filter(item => arr2.includes(item));
// console.log(commonItems);

////////////////////////////////////

//Q4 
// function chunkArray(arr, size) {
//   const chunkedArray = [];
//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     chunkedArray.push(chunk);
//   }
//   return chunkedArray;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 2;
// const result = chunkArray(array, chunkSize);

// console.log(result); 

/////////////////////////
// const strings = ["a", "b", "a", "c", "b", "b"];
// function count_string(arrey) {
//   let 
// }


// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);



const os = require('os');
console.log(os.uptime());
console.log(os.hostname());
console.log(os.totalmem());


