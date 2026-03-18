// Arguments
function logArgs(){
    for (const arg of arguments){
        console.log(arg);
    }
}

logArgs(1,3,4,5);

//to perform functions like array first you have to change the arguments into array

function hasCat(){
    return [...arguments].includes('cat');
}

console.log(hasCat('cat','dog','hen'));
console.log(hasCat('fish','dog','hen'));


// rest parameteric function 

function hasCat(...args){
    return args.includes('cat');
}
console.log(hasCat('cat','dog','hen'));
console.log(hasCat('fish','dog','hen'));

