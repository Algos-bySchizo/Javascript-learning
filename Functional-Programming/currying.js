function curriedAdd(a){
    return function(b){
        return a*b;
    }
}

let multipul=curriedAdd(5);

console.log(multipul(4))
console.log(multipul(3))
console.log(multipul(8))
