// using new String('xyz') constructor

const greetings = new String('JavaScript');
const greet='JavaScript';
console.log(typeof(greetings))
console.log(typeof(greet))
console.log(greetings.length===greet.length)

// using toString('xyz')

let num=19;
console.log(num.toString())

// using radix with toString to assign a base and get the numbers in the binary, decimal and octals etc.

num=10;
console.log(num,num.toString(2));

// using it on arrays

let arr=[1,3,45,6,7];
console.log(arr.toString())

// using with objects

const person={
    name:'Usman',
    age: 30,
    isStudent: true
}

console.log(person.toString())

// using new Numbers() constructor

let anum=Number('54');
console.log(anum)
console.log(typeof(anum))

/*
it is helpful to use the new Number('') constructor if the value is given to you in string, it converts that into number
if you leave it empty means no value is passed to the constructor it gives you 0.
*/
anum=Number('');
console.log(anum)

/* it returns NaN if the value is not a number */
anum=Number('hello');
console.log(typeof(anum)) // number
console.log(anum) // NaN

