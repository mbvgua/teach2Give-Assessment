// Given a JavaScript object representing user data like the one below:
 
const randomObject =  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }

    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
 
// Write a single line of JavaScript code that uses destructuring 
// to extract and store the lat value (-37.3159 in this example) in a 
// variable named lat.

// perform object destructuring in nested objects
// get into address, then geo and finally lat
const {address: {geo : {lat}}} = randomObject
console.log(lat)

 
 