// Classes and Objects
// class Classname {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new Classname("arg1", "arg2");

// console.log(obj.prop1); 
// console.log(obj.prop2); 

// This keyword refers to the object it belongs to ,so it is the first property of the instance of Classname.

// class Dog {
//     constructor(dogname, weight, color, breed) {
//         this.dogname = dogname;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("Javascript", 2.4, "brown", "chihuahua");

// console.log(dog.dogname);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;

//     }
// }
// let p=new Person("Kartik","Chaudhary");
// console.log(p.firstname,p.lastname);


// Methods
// When defining these methods we don't use the function keyword.We directly start with the name.
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet() {
//         console.log("Hi there! I am " + this.firstname);
//     }
// }
// let person = new Person("Kartik");
// person.greet(); 

// class Person{
//     constructor(firstname, lastname){
//       this.firstname = firstname;
//       this.lastname = lastname;
//       }
//       greet() {
//         console.log("Hi there! I'm" ,this.firstname);
//       }
//       compliment(name,object){
//         return "That's a wonderful" + object + " , " + name; 
//       }
//   }