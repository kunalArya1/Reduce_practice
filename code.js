/**  1. Given an array, write an ES6 function that returns the total length of all the strings in an array.
 
const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
 

console.log(totalLength(strings))
 // Output: 30 
 
*/

const fruit = ["apple", "banana", "cherry", "date", "blueberry"];

const CountStringNumber = (arr) => {
  return strings.reduce((acc, fruit) => acc + fruit.length, 0);
};

// console.log(CountStringNumber(fruit));

/** 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
 

const numbers = [1, 2, 3, 4, 5]

 console.log(sumSquares(numbers))
 // Output: 55 
 
 */

const numbers = [1, 2, 3, 4, 5];

const squareSum = (arr) => {
  return arr.reduce((acc, num) => acc + num * num, 0);
};

// console.log(squareSum(numbers));

/**  3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.
 
const items = [
 { name: 'Item 1', price: 10 },
 { name: 'Item 2', price: 20 },
 { name: 'Item 3', price: 30 },
 ]


 console.log(totalValue(items))
 // Output: 60 
 
 */
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

const totalValue = (arr) => {
  return arr.reduce((acc, item) => acc + item.price, 0);
};

// console.log(totalValue(items));

/** 4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.


 console.log(concatStrings(['this', 'is', 'fun'])) // Output: 'thisisfun' */

const concatStrings = (arr) => {
  return arr.reduce((acc, string) => acc + string, "");
};

// console.log(concatStrings(["this", "is", "fun"]));

/**  5. Write an ES6 function to multiply and return all the elements of a given array.
 
const numbers = [1, 2, 3, 4, 5]

 console.log(product(numbers))
// Output: 120 */

const number = [1, 2, 3, 4, 5];

const product = (arr) => {
  return arr.reduce((acc, num) => acc * num);
};

// console.log(product(number));

/** 6. Write an ES6 function that takes an array of strings and returns the longest string.
 
const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']


 console.log(longestString(strings))
 // Output: 'Haule Haule 
 
 */

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (arr) => {
  // return arr.reduce((acc, str) => (acc.length > str.length ? acc : str));

  return arr.reduce((acc, str) => {
    if (acc.length < str.length) {
      acc = str;
    }
    return acc;
  });
};

// console.log(longestString(strings));

/**  7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
 
const people = [
 { name: 'Jeena', age: 25 },
 { name: 'Priya', age: 30 },
 { name: 'Naina', age: 45 },
 ]

 console.log(oldestPersonName(people))
 // Output: 'Naina' */

const peoples = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];

const oldestPersonName = (arr) => {
  return arr.reduce((acc, person) => {
    if (acc.age < person.age) {
      acc = person;
    }
    return acc;
  }).name;
};

// console.log(oldestPersonName(peoples));

/** 8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
 
const people = [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
 { name: 'Charlie', age: 35 },
 { name: 'David', age: 40 },
 ]


 console.log(getAverageAge(people))
 // Output: { averageAge: 32.5 } 
 
 */
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const getAverageAge = (people) => {
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  return { averageAge: totalAge / people.length };
};

// console.log(getAverageAge(people));

/**  
 
9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
 

 const products = [
 { name: 'Bread', price: 10, quantity: 2 },
 { name: 'Clips', price: 20, quantity: 5 },
 { name: 'Knife', price: 30, quantity: 1 },
 { name: 'Slipper', price: 40, quantity: 3 },
 ]

 console.log(findMostExpensiveProduct(products))
 // { name: "Slipper", price: 40, quantity: 3 } 
 
 */

const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];

const findMostExpensiveProduct = (arr) => {
  return arr.reduce((acc, product) => {
    if (acc.price < product.price) {
      acc = product;
    }
    return acc;
  });
};

console.log(findMostExpensiveProduct(products));

/** 

 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.


 const fruits = [
 'apple',
 'banana',
 'banana',
 'cherry',
 'apple',
 'apple',
 'banana']

 console.log(countStrings(fruits))
 // Output: { 'apple': 3, 'banana': 3, 'cherry': 1 } 
 
 */


 const fruits = [
   "apple",
   "banana",
   "banana",
   "cherry",
   "apple",
   "apple",
   "banana",
 ];

 const concatString = ( arr )=>{
    return arr.reduce((acc, fruit)=>{
      if(acc[fruit]){
         acc[fruit] += 1;
      }else{
         acc[fruit] = 1;
      }
      return acc;
    }, {});
 }

 console.log(concatString(fruits));