const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful!");
  }, 4000);
});
aPromise.then(result=>console.log(result));

//another way of promise chaining

aPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

//Fetch and promise chaining

fetch('https................./data')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        return fetch('https........../data2')
    })
    .then(reponse=> reponse.json())
    .then(data2=>console.log(data2))
    .catch(error=>console.log('error',error));

// example of an Async funtion using await keyword

async function delayedGreeting(name){
    console.log('A messanger has entered the chat...');
    await new Promise(resolve=>setTimeout(resolve,2000));
    console.log(`Hello ${name}`);
}
delayedGreeting('Usman');
console.log('this message will be logged in first');

// example of try/catch using async/await

async function fetchUserData(){
    try{
        let response=await fetch('https.........');
        let userdata=await response.json();
        console.log(userdata)
    } catch(error){
        console.log('error arised while fetching user data', error);
    }
}

fetchUserData()

// lokking at an example of getting a users geolocation 

navigator.geolocation.getCurrentPosition(
    (position)=>{
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    },
    (error)=>{
        console.log('error ', + error.message);
    }
)