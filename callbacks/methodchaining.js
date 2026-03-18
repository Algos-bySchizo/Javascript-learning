let aStr='  Hello, World!  '
    .trim()
    .toLocaleLowerCase()
    .replace('world','JavaScript')

    console.log(aStr)

// Using map, reduce, and filter
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus=transactions
    .filter((transactions)=>transactions.type==='credit')
    .map((transactions)=>transactions.amount*1.1)
    .reduce((sum, amount)=> sum+amount,0)

    console.log(totalCreditWithBonus)

// Using manual methods and using them as method chaining

let obj={
    value:1,
    increment: function(){
        this.value++;
        return this;
    },
    double: function(){
        this.value*=2;
        return this;
    },
    getValue: function(){
        return this.value;
    }
}

console.log(obj.increment().double().increment().getValue());

// .sort() 
let array=[1,23,452,5,63,12432,4634];
console.log(array.sort((a,b)=>a-b))

// every()
array=[2,4,6,8,10]
evenArray=array.every((num)=> num%2===0);
console.log(evenArray)

// .some()

array=[1,2,3,4,5,6,7,8,9,10]
evenArray=array.some((num)=> num%2==0);
console.log(evenArray)