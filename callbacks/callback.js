// forEach 
let numbers=[1,2,3,4,5];
numbers.forEach(function(number,index,array){
    // console.log(`element ${number} is at index ${index} in array ${array}`)
    numbers.push(number*2);
  });
console.log(numbers)

//another example for callback functions

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Usman", sayBye);