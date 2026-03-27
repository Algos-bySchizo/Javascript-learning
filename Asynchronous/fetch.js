// example code for how to use fetch api to retrieve data and then convert it into json as we cannot use it directly
fetch('api url to GET, POST, PUT ,DELETE and other perform other various functionality')
.then(response => response.json())
.then(data =>console.log(data))

// using POST method with fetch api
fetch('api url to GET, POST, PUT ,DELETE and other perform other various functionality', {
    method:'POST',
    "headers":{
        'Content-type':'application/json',

    },
    "body":JSON.stringify({
        name:'example name',
        email:'example.email'
    })

})

//using put method with fetch API

fetch('api url to GET, POST, PUT ,DELETE and other perform other various functionality/45(uniqued ID)', {
    method:'POST',
    header:{
        'Content-type':'application/json',
    },
    body:JSON.stringify({
        name:'zyx',
        email:'zyd@zyasemail.com'
    })
})

// delete method is use to delete something form the server

fetch('api url to GET, POST, PUT ,DELETE and other perform other various functionality/45(uniqued ID)', {
    method:'DELETE',
})