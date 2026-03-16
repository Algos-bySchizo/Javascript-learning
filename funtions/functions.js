// null parameter functions 
function greet1(){
    console.log('Hi there!');
}

let result=greet1();
console.log(result);//since the function doesn't returns anything so by default this line shows undefined

//function that has an input parameters
function greet(name){
    console.log(`Hi ${name}!`);
}

greet('usman');
greet('ali');
greet('xyz');

// function to print the sum of two numbers
function add(num1,num2){
    return num1+num2
}
let result1=add(3,4);
console.log(result1);

//Fucntions with default input if input not given

function greet(name='default'){
    console.log(`Hi ${name}!`);
}

greet();
greet('usman');
greet('ali');
greet('xyz');

//Functions using => identifiers

const greetings = name => {console.log(`hello ${name}!`)};
greetings()

//Function to Calculate Area 

const area=(height, width)=>{
    const area=height*width;
    return area
}

console.log(area(3,4))

//Another Variation for Calulating Area program

const area2=(width, height)=>{
    return width*height
}

console.log(area2(3,4));

//Another Variation

const area3=(width, height) => width*height;
console.log(area3(4,3))