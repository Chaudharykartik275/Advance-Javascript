// Map : Map holds key value pairs where the keys can be any datatype.

// Create a Map
// const fruits = new Map([
//   ["apples",500],
//   ["bananas",300],
//   ["oranges",200]
// ]);
// console.log(fruits);

// The set Method

//Create a Map
// const fruits = new Map();
//Set Map values
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// fruits.set("apples",200);
// console.log(fruits);

// fruits.get("apples");

// Returns object
// typeof fruits;

// instanceof Map returns true:
// fruits instanceof Map;


// Difference between JS objects and map

//JS Map Methods

// console.log(fruits.get("apples"));
// console.log(fruits.set("apples"));
// console.log(fruits.size);
// console.log(fruits.delete("apples"));
// fruits.clear();
// console.log(fruits.has("apples"));

// //Map.forEach()   
// //List of entries
// let text ="";
// fruits.forEach(function(value,key){
//   text += key + '=' + value;
// })
// console.log(text);

// //Map.entries()
// //List of entries
// let text ="";
// for(const x of fruits.entries()){
//   text += x;
// }
// console.log(text);

// // Map.keys()
// //List of entries
// let text ="";
// for(const x of fruits.keys()){
//   text += x;
// }
// console.log(text);

// // Map.values()
// //List of entries
// let text ="";
// for(const x of fruits.values()){
//   text += x;
// }
// console.log(text);

// //Sum all values
// let total = 0;
// for(const x of fruits.values()){
//   total += x;
// }
// console.log(total);

//create objects 
// const apples = {name:"Apples"}; 
// const bananas = {name:"Bananas"};       
// const oranges = {name:"Oranges"};
// //Create map 
// const fruits = new Map();
// //Add new elements to map
// fruits.set(apples,500);
// fruits.set(bananas,300); 
// fruits.set(oranges,400);
// console.log(fruits);
// console.log(fruits.get("apples"));   

//Java Script Map.groupBy(): groupBy() method is used to group the elements of an array based on a specific property.

// const fruits = [
//   { name: "apple", quantity: 300 },
//   { name: "banana", quantity: 500 },
//   { name: "orange", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// //Callback function to group Elements
// function myCallback({quantity}){
//   return quantity > 200 "ok":"low";
// }

// //Group by Quantity
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

// javascript destructuring
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// //Destructuring
// const { firstName, lastName } = person;


// console.log(firstName, lastName); // John Doe
// console.log(lastName, firstName); 

// Object Alias
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// //  destructuring
// let { lastName,name } = person;

// console.log(firstName, name); 

// create a string
//String Destructuring
// let name = "Kartik";
// let[a1,a2,a3,a4,a5]= name;


// const fruits=["Bananas","Oranges","Apples","Mangoes"]
// let[fruit1,fruit2]=fruits;
// console.log(fruit1,fruit2);
// let [fruit1, , , fruit2] = fruits;
// console.log(fruit1, fruit2);
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1, fruit2);


// const numbers = [10, 20, 30, 40, 50, 60, 70];
// const [a, b, ...rest] = numbers;
// console.log(a);      // 10
// console.log(b);      // 20
// console.log(rest);   // [30, 40, 50, 60, 70]

// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   let text = "";
//   for (const [key, value] of fruits) {
//     text += key;  
//   }
  
//   console.log(text);  

// Exponentiation Operator
// let x =5;
// let z =x**2
// console.log(z);

// let x = 5;
// x **= 2;  
// console.log(x);  

// Array includes()
// const fruits = ["Bananas", "Oranges", "Apples", "Mango"];
// console.log(fruits.includes("Mango"));  
// const fruits = ["Bananas", "Oranges", "Apples", "Mango"];
// console.log(fruits.includes("Banana", 3)); 


// Trailing Comma also known as dangling or terminal comma is a symbol that is typed after the last item of a list of elements.
// A trailing comma is a comma placed after the last item in an array, object, or function parameter list. While optional, it provides several benefits:

// Easier Code Modifications: Adding new elements or parameters is simpler because you don't need to modify the previous line to add a comma.

// Cleaner Version Control: Reduces unnecessary changes in diffs, making it clearer when adding new items, as only the new line will show up in version control.

// Consistent Formatting: Helps maintain consistency, especially in large structures like arrays or objects, avoiding errors and making it easier to edit.

// Prevents Syntax Errors: Reduces the chance of errors when adding new elements, as you don't need to worry about missing commas.

// Code Style Consistency: Provides a uniform coding style, especially when enforced by linters.

// const arr=[
//     "one",
//     "two",
//     "three",

// ];
// console.log(arr);
// console.log(arr.length);

// const arr=[
//     "one",
//     "two",
//     "three",,

// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray = [1, , , 4, 5, ,];
// console.log(sparseArray.length);  // Output: 6

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// };
// console.log(person.firstName);  // Output: John
// console.log(person.lastName);   // Output: Doe
// console.log(person.age);        // Output: 30
