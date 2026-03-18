// this is the example of a high priority function using callback
function operateOnArr(arr, operation){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(operation(arr[i]));
    }
    return result;
}

function double(x){
    return x*2;
}

let number=[1,2,3,4,5];
let doubledNumbers=operateOnArr(number,double);
console.log(doubledNumbers);

// //another example of callback function

function multiplyBy(factor){
    return function(number){
        return number*factor;
    }
}

let double =multiplyBy(2);
let triple =multiplyBy(3);

console.log(double(5));
console.log(triple(5));

// using Map 

numbers=[1,2,3,4,5]
const doubleNumbers=numbers.map((num)=>num*2);
console.log(numbers)
console.log(doubleNumbers)

const numarr=[3,4,5,6,7].map((element, index, array)=>{
    console.log(`Element: ${element}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${array}`);
    return element*2
})

// using .filter on Arrays

const numbers=[1,2,3,4,5,6,7,8]
let filteredNumbers=numbers.filter((num)=> num%2===0);
console.log(filteredNumbers)


const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople=developers.filter((value)=> value.age<30);
console.log(youngPeople);

// Using .reduce on Arrays

let array=[1,2,3,4,5,6,7,8,9,10]
const reducedArray=array.reduce((initialVal, num)=> initialVal+num,0);
console.log(reducedArray);

//find product of all elements in array

array=[1,2,3,4,5,6,7,8,9,10];
let modArray=array.reduce((initalValue, number)=> initalValue*number);
console.log(modArray)

//find the maximum number 

array=[1,2,3,4,5,6,7,8,9,10,70];
const maxNumber=array.reduce((initialValue, number)=> Math.max(number),0);
console.log(maxNumber)

// convert the array into one string 

array=['h','e','l','l','o'];
modArray=array.reduce((initalValue,num)=> initalValue+num,"");
console.log(modArray)

// convert the array into one string 

array=['h','e','l','l','o'];
modArray=array.reduce((initalValue)=> initalValue=initalValue+1,0);
console.log(modArray)
