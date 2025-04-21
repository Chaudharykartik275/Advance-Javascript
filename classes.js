// class className {
//     constructor(prop1,prop2) {         //one time initialization to attribute values
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new className("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class dog{
//     constructor(dogName,weight,color,breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog(JavScript, 2.4, "brown" , "goldenRetriever");
//     console.log(dog.dogName, "is a", dog.breed, "and weight" , dog.weight, "10 kg");

// class Person {
//     constructor(firstName,lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Aradhya");
// console.log("Hi", p.firstName);


             //Methods - Function on a class are called methods 
// class Person {
//      constructor(firstName,lastName) {
//          this.firstName = firstName;
//          this.lastName = lastName;
//      }
//     greet() {
//      console.log("Hi there! I'm" , this.firstName);
//     }
//  }
//  let p = new Person("Aradhya","Srivastava");    //constructor is invoked
//  p.greet();



//  class Person {
//     constructor(firstName,lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//    greet() {
//     console.log("Hi there! I'm");
//    }
//    compliment(name,object) {
//     return "That's wonderful" + object + " " + name;
//    }
// }
// let compliment = p.compliment("Harry","Hat");
// console.log(compliment);


                //  properties - hold the data of the class
// class Person {
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }    
// }
// let p = new person("hello" , "world");
// console.log(p.firstName);


// constructor(firstname,lastName); {
//     if(firstname.startswith("M")) {
//         this.firstname = firstname;
//     } else{
//         this.#firstname = "M" + firstname;
//     }
//     this.lastName = lastName;
// }   

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }  
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Aradhya" ,"Srivastava")
// console.log(p.firstname, p.lastname = "gupta");


class vehicle {
    constructor(color,currentSpeed,maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("Moving at",this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += this.currentSpeed;
    }
}
class Motorcycle extends vehicle {
    constructor(color,currentSpeed,maxSpeed, fuel) {
        super(color,currentSpeed,maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel");
    }
}
let motor = new Motorcycle("Black",0,250,"gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();


//prototype


