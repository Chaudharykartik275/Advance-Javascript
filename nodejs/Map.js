// create a map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",400],
//     ["oranges",200]
// ]);
// console.log(fruits);

//create a map
// const fruits=new Map();
// //set map values
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);

// console.log(fruits);

// // The get method
// console.log(fruits.get("apples")); 


// Difference between object and map

// JS map methods

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 400],
//     ["oranges", 200]
// ]);

// console.log(fruits); 
// console.log(fruits.size); 
// console.log(fruits.delete("apples")); 
// console.log(fruits.has("apples")); 
// fruits.clear();                    
// console.log(fruits);                 

let text = " ";

fruits.forEach(function(value, key) {
    text += key + '=' + value + '\n'; 
});

console.log(text);
