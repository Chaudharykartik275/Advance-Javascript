//  Callbacks

// function dosomething(callback){
//       callback();
//       console.log("Did something!"); 
//     }
//     function sayhi(){
//       console.log("Hi  !");
//     }
//     dosomething(sayhi);


// function judge(grade) {
//     switch (grade) {
//       case "A":
//         console.log("You got an", grade, "amazing");
//         break; 
//       case "B":
//         console.log("You got a", grade, "well done");
//         break;
//       case "C":
//         console.log("You got a", grade, "alright");
//         break;
//       case "D":
//         console.log("You got a", grade, "hmm . . .");
//         break;
//       default:
//         console.log("An", grade, "!what?!");
//     }
//   }
//   function getGrade(score,Callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     Callback(grade);
// }
// getGrade(85,judge);


// setInterval(encourage, 500);

// function encourage() {
//   console.log("You're doing great!");
// }


// Promises

"// Promises: This function needs two parameters, and these parameters are callbacks. We have called them resolve and reject here. When resolve is called, the promise is presumed to be successful, and whatever is passed to resolve is returned and used as the promise's fulfillment value. When reject is called, the promise is considered to have failed, and whatever is passed to reject is used as the promise's rejection reason (often an error object or message)."

// let firstPromise = new Promise((resolve, reject) => {
//     let x = 20;
//     let y = 40;
//     if (x > 15) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
// });

// firstPromise
// firstPromise
//     .then((value1) => {
//         console.log("Resolved:", value1);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve("Success!!");
//   })
//   .then(value => {
//     console.log(value);
//     return "WE";
//   })
//   .then(value => {
//     console.log(value);
//     return "can";
//   })
//   .then(value => {
//     console.log(value);
//     return "chain";
//   })
//   .then(value => {
//     console.log(value);
//     return "promises";
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(value);
//   });
  
//   function saySomething() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }
  
//   async function name(params) {
  
//   }


// async and await
// With the async keyword we can make a function return a promise. The await keyword can only be used inside an async function. It makes JavaScript wait until the promise is resolved and returns its result.

// // with await
// function saySomething(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("something"+ x);
//       }, 2000);
//     });
//   }
//   async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
//   }
//   talk(2);
//   talk(4);
//   talk(8);

// // without await
// function saySomething(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("something"+ x);
//       }, 2000);
//     });
//   }
//   async function talk(x){
//     const words =  saySomething(x);
//     console.log(words);
//   }
//   talk(2);
//   talk(4);
//   talk(8);


// Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded. It does this by offloading operations to the system kernel whenever possible. The event loop continuously checks the call stack and the message queue, executing tasks from the queue when the call stack is empty.
// This allows JavaScript to handle asynchronous operations, such as I/O tasks, timers, and user interactions, without blocking the main thread. The event loop is a key part of JavaScript's concurrency model, enabling it to manage multiple tasks efficiently while maintaining a responsive user experience.

// Callstack: The call stack is a data structure that keeps track of the execution context of JavaScript code. It follows the Last In, First Out (LIFO) principle, meaning that the last function called is the first

// Callback Queue: The callback queue (or message queue) is a queue that holds messages or tasks that are waiting

// console.log("Hi there!");
// add(4,5);
// function add(x,y){
//     return x+y;
// }

// console.log("Hi there!");
// setTimeout(() => {
//     console.log("Sorry I am late!");
// }, 1000);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }

// The setTimeout() task gets to the browser's web APIs when it is done this appears in special place called the callback queue. The event loop checks the call stack and if it is empty, it takes the first task from the callback queue and pushes it to the call stack. The event loop continues this process, allowing JavaScript to handle asynchronous tasks without blocking the main thread.
// This is how JavaScript can perform non-blocking I/O operations and maintain a responsive user experience, even though it is single-threaded. 

// console.log("Hi there!");
// setTimeout(() => {
//   console.log("Sorry I am late!");
// }, 0);
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }