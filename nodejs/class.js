// // const fruit=new Map([
// //     ['apple', 1],
// //     ['banana', 2],
// //     ['orange', 3],
// // ])
// // console.log(fruit) 

// const fruit=new Map();
// fruit.set("apple",200);
// fruit.set("banana",300);
// fruit.set("orange",400);
// // console.log(fruit.get("banana")) //300
// // console.log(fruit.has("banana")) //true 
// // console.log(fruit.has("kiwi")) //false
// // console.log(fruit.size) //3
// // fruit.delete("banana")
// // console.log(fruit.has("banana")) //false
// // console.log(fruit.size) //2
// // console.log(fruit.keys()) //MapIterator {"apple", "orange"}
// // console.log(fruit.values()) //MapIterator {200, 400}
// console.log(fruit)
// fruits.set(oranges, 200);
// const fruits=[
//     {name:"apple",color:"red"},
//     {name:"banana",color:"yellow"},
//     {name:"orange",color:"orange"},
//     {name:"kiwi",color:"green"},
//     {name:"grape",color:"purple"},
// ]
// const fruitMap=new Map();
// console.log(fruit)
//destructuring 
//  const person ={
//     fristname: "john",
//     lastname: "dev",
//     age:60
//  };
 // destructuring is not destructive
//  let{a1, a2 ,a3,a4,a5}=name
 //A map holds a key value pair where the keys can be any datatypes
//remembers the original insertion
//Creation of Map
// const fruits=new Map([["apples",500],["bananas",300],["Oranges",200]]);
// console.log(fruits);

// const fruits=new Map();
// fruits.set("apple",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// fruits.set("oranges",500);
// console.log(fruits);
// console.log(fruits.size);
// console.log(fruits.get("apple"));
// //fruits.delete("apple");
// console.log(fruits.size);
// console.log(fruits.has("apple"));

//for Each
// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+ value+" ";
// })
// console.log(text);
//Map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text)


// let text="";
// for(const x of fruits.keys()){
//     text+=x+" ";
// }
// console.log(text);

// let text=0;
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

//Object as keys
// create objects
// const apples={name:'Apples'};
// const bananas={name:'bananas'};
// const orange={name:'orange'};

// //create a map
// const fruits=new Map();
// //Add new elemants to the map
// fruits.set(apples,200);
// fruits.set(bananas,500);
// fruits.set(orange,300);

// const fruits=[{name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// } 
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);


//structuring

// const person={
//     firstName:"John",
//     lastNmae:"Doe",
//     age:50

// };
// console.log(person);

// Destructuring

// let{firstName,lastNmae}=person;
// let{age}=person;
// console.log(firstName);
// console.log(lastNmae);
// console.log(age);
////Destructuring is not destructive
//let{firstName,lastNmae,counrtry="US"}=person;


//String destructuring
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]= name;

//Swapping javaScript variables
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];

// let x=5;
// let z=x**2;// x is not modified
// console.log(z);
// let z1=Math.pow(x,2);
// console.log(z1);
//Swapping javaScript variables
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];

// let x=5;
// let z=x**2;// x is not modified
// console.log(z);
// let z1=Math.pow(x,2);
// console.log(z1);
//Swapping javaScript variables
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];

// let x=5;
// let z=x**2;// x is not modified
// console.log(z);
// let z1=Math.pow(x,2);
// console.log(z1);
// let x=5;
// x**=2;
// console.log(x);
// trailing comma
