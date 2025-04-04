// function sayHell;
// o(){
//     let you = prompt("whats your name ");
//     console.log("hello" , you +"!")
// }

// sayHello() ;


// let varContainingFunction = function(){
//     let varInFunction = "i'm in a function";
//     console.log("hi there" , varInFunction);
// };

// varContainingFunction();








// parameterr and argumenets 

// function tester( para1, para2){
//     return para1 + " " + para2;

// }
// const arg1 = "kartik";
// const arg2 = "chaudhary";
// console.log(tester(arg1,arg2));

// # prompt talkes string to convert string to numbers use parseInt()















// add two numbers

// let x = parseInt(prompt("enter first num"));
// let y = parseInt(prompt("enter sec num"));

// add(x,y);


// function add(a,b){
//     console.log(a+b);


// }







// default parameter

// add();
// add(1,3);
// add(10)
// add(1,2,3,4)

// function add(a=4,b=6){
//     console.log(a+b);


// }



// arrow function = great for sending around as parameter and using shorter notations  , single line output
// (para1 , para1) =>{
//                     body of function
//                    } 

// function addTwoNumbers(x=2, y=3){
//     console.log(x+y) // Default arguments are always trailing arguments
//   }
//   addTwoNumbers();
//   addTwoNumbers(6,6);
//   addTwoNumbers(10);



// Arrow function
// (parameter1,parameter2)
// Special Functions and Operators

// function doingStuff(x){
//     console.log(x);
// }

// Arrow function of above funnction
// let doingStuff=(x)=>{
//     console.log(x)
// }
// doingStuff("hello world")
// doingStuff(123)
// doingStuff("12345")

// const arr=["apple","mango","grapes"];
// arr.forEach(e=>console.log(e));


// Spread operator
// let spread=["so","much","fun"];
// let message=["javascript","is",...spread,"and","very","powerful"];
// console.log(message)

// function addTwoNumbers(x,y){
//         console.log(x+y) 
//       }
// let arr=[5,6];
// addTwoNumbers(...arr)

// function addFourNumbers(x,y,z,a){
//         console.log(x+y+z+a) ;
// }
// let arr=[5,9]
// let arr2=[6,7]
// addFourNumbers(...arr,...arr2)

// Rest Operator
// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","how are you!");

//Returning function values
let=addTwoNumbers = (x,y) => x+y;
let resultsArr =[];
for(let i=0; i<10; i++){
  let result = addTwoNumbers(i, 2*i);
  resultsArr.push(result);
}
console.log(resultsArr);

/* This is a comment */

































































