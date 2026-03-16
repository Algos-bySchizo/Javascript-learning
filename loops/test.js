const person={
    name:'Usman',
    age:34,
    address:{
        street:'west ave',
        city:'anytowm',
        state:'CA'
    }
}

for (const prop in person){
    console.log(person[prop])
}