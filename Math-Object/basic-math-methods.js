// Math.random() generates a random number between 0-1
const num=Math.random()
console.log(num)

// Math.floor(), Math.ceil(), Math.round()
const num2=4.38;
console.log(Math.floor(num2));
console.log(Math.ceil(num2));
console.log(Math.round(num2));

// returns the largest number from the list
const largestNum=Math.max(1,3,5,23,64,756,1239);
console.log((largestNum));

// returns the smallest number from the given array/list
const smallestNum=Math.min(1,3,5,23,64,756,1239);
console.log((smallestNum));

// to generate a random integer between (0-10) 
const max=10;
const min=0;
const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNumber);

// random number between (1-20)

const randomnumberbw1and20=Math.floor((Math.random()*20))+1;
console.log(randomnumberbw1and20)

//Math.trunc eleminates the decimal part from the value and returns the whole number

const trunfunc=Math.trunc(5.6)
console.log(trunfunc)

//Math.cbrt() for cube root and Math.sqrt() for square root

const cube=Math.cbrt(81)
const sqr=Math.sqrt(81)

console.log(`the cube root of 81 is ${cube}, and the square root of 81 is ${sqr}`);

// Math.abs() to return the absolute value

const absnum=Math.abs(-67);
console.log(absnum)

//Math.pow(num, pow) to return the power for any integer

const powof2=Math.pow(4,5);
console.log(powof2)