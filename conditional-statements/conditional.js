// Normal Conditional Statements
let age=25;

if(age<18){
    console.log('can\'t vote');
}
else if(age>18){
    console.log('can vote');
}

const score=60;

if(score>80){
    console.log('Grade is A+');
}
else if(score>=75){
    console.log('Grade is A');
}
else if(score>=70){
    console.log('Grade is B+');
}
else if(score>=65){
    console.log('Grade is A+');
}
else{
    console.log('failed');
}

//Binary Logical Operators

// && double AND checks the first operand whether its true or not, if its truthy then it returns the second operand  

const num= false && 0; //if both the operands is false the program returns the first falsy operand
const num2=3 && 1;

console.log(num);
console.log(num2);

if(2<3 && 7>5){
    console.log('this block runs');
}
else{
    console.log('the above condition is falsy');
}

// || double OR is to check if either of the operand is truthy if so it returns that.

const result='I\'ve passed the test' || false;
console.log(result);

const result2= false || 'I\'ve passed the test';
console.log(result2);

let userInput;
if (userInput || 'Guest'){
    console.log('the user is guest');
}
else{
    console.log('no user detected!');
}

//?? (checks if the first is value is null if so, gives it some value or assigns it a default value)
const temperature=40;
const weather = temperature>25?'warm':'cool';
console.log(weather);

const user_settings={
    theme:null,
    volume:0,
    notifications:false
}

let theme = user_settings.theme ?? "light";
console.log(theme);