// for (i=2;i<=6;i+=2){
//     // console.log(i);
// }

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// for (const num of numbers){
//     console.log(num);
// }

// const str = 'this is my first time working on js';

// for (let char of str) {
//   console.log(char);
// }

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 40 }
// ];

// //with the $ dollar sign you access the value within the data in key value pairing 
// for (const person of people) {
//   console.log(`${person.name} is ${person.age} years old`);
// }

// const fruit = {
//   name: 'apple',
//   color: 'red',
//   price: 0.99
// };

// for (const prop in fruit) {
//   console.log(prop,fruit[prop]);
// }

// const person = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   },
// };

// function isObject(obj) {
//   return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
// }

// for (const prop in person) {
//   if (isObject(person[prop])) {
//     for (const nestedProp in person[prop]) {
//       console.log(person[prop][nestedProp]);
//     }
//   } else {
//     console.log(person[prop]);
//   }
// }
// for (let i=0; i<10; i++){
//     if (i===5){
//         continue;
//     }
//     else if (i===7){
//         break;
//     }
//     console.log(i);
// }

outerloop : for (let i=0; i<3; i++){
    innerloop: for (let j=0; j<3; j++){
        if(i===1 && j===1){
            break outerloop;
        }
        console.log(`i: ${i}, j:${j}`);
    }
}