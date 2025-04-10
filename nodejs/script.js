// function sayHello(){
//   let you = prompt("What's your name? ");
//   console.log("Hello", you + "!");
// }
// sayHello();


// let varContainingFunction = function(){
//   let varInFunction = "I'm in a function";
//   console.log("hi there!", varInFunction);
// };

// varContainingFunction();


// function tester(para1, para2){
//   return para1 + "" + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// tester(arg1, arg2);


// function addTwoNumbers(x,y){
//   console.log(x+y);
// }
// addTwoNumbers(5,5);


// function tester(para1,para2){
//   return para1+" "+para2
// };
// const arg1 = "Pal";
// const arg2 = "Bhardwaj";
// console.log(tester(arg1,arg2));
// let x = parseInt(prompt("Enter a number"));
// let y = parseInt(prompt("Enter a number"));
// function addTwoNum(x,y){  
//     console.log(x+y);
// }
// addTwoNum(x,y);


// console.log("This is an argument");
// prompt("Argument here too");


// let arr=[];
// arr.push("argument")


// function addTwoNumbers(x=2, y=3){
//   console.log(x+y) // Default arguments are always trailing arguments
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);


//Special functions and operators
//Arrow Functions
// (param1, param2) => argument of the function;

// function doingStuff(x){
//   console.log(x);
// }

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");


// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);


// const arr =["Squirrel","Alpaca","Buddy"];
// arr.forEach(e => console.log(e));


// let spread = ["So","much","fun"];
// let message = ["JavaScript","is", ...spread, "and", "very","Powerful"];
// console.log(message)


// function addTwoNumbers(x,y){
//   console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr)


// function addFourNumbers(x,y,z,a){
//   console.log(x+y+z+a)
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2)


// function someFunction(param1,...param2){
//   console.log(param1,param2);
// }
// someFunction("Hi","there!","How are you?");


//Returning function values
// let=addTwoNumbers = (x,y) => x+y;
// let resultsArr =[];
// for(let i=0; i<10; i++){
//   let result = addTwoNumbers(i, 2*i);
//   resultsArr.push(result);
// }
// console.log(resultsArr);

// Returning with arrow function
// let addTwoNumbers=(x,y)=>(x+y);
// let result=addTwoNumbers(12,15);
// console.log(result);

// Multiple statements
// let addTwoNumbers=(x,y)=>{
//   console.log("Adding...");
//   return x+y;
// }

// Variable scope in functions

// Local variables
// function testAvailability(x){
//   console.log("Availability here:",x);
//   }
// testAvailability("Hi");
// console.log("Not available here:",x)

// let is a block scope
// function testAvailability(){
//   let y="Local variable";
//   console.log("Available here:",y);
// }
// testAvailability("Hi");
// console.log("Not available here:",y)

// function testAvailability() {
//   let y = "I'll return";
//   console.log("Available here:", y);
//   return y;
// }

// let z = testAvailability();
// console.log("Outside function:", z);


// let and var
// var
// function doingStuff(){
//   if(true){
//     var x ="local";
//   }
//   console.log(x);
// }
// doingStuff();

// let
// function doingStuff(){
//   if(true){
//     let x ="local";
//   }
//   console.log(x);
// }
// doingStuff();

// function doingStuff(){
//   if(true){
//     console.log(x);
//     var x ="local";
//   }
// }
// doingStuff();

// constant
// function doingStuff() {
//   if (true) {
//     const x = "local";
//   }
//   console.log(x);
// }
// doingStuff();

// Global variable
// let globalvar="accesible everywhere!";
// console.log("outside function:",globalvar)
// function creatingnewscope(x){
//    console.log("access to global vars inside the function:",globalvar);
// }
// creatingnewscope("some parameters");
// console.log("still available",globalvar)

let x ="global";
function doingStuff(){
  let x ="local";
  console.log(x)
}

