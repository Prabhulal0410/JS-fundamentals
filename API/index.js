// 📘 API (Application Programming Interface)

// Definition:
// An API (Application Programming Interface) is a set of rules that allows two software applications to communicate and exchange data with each other.
// In Simple Words:
// An API acts as a messenger between the client and the server. It sends requests to the server and returns the server's response.


// 📘 REST (Representational State Transfer)

// Definition:
// REST (Representational State Transfer) is an architectural style used to design web APIs that communicate over HTTP.
// In Simple Words:
// REST defines a standard way for a client and a server to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

// Example:

// GET    /users      → Fetch users
// POST   /users      → Create a new user
// PUT    /users/1    → Update user
// DELETE /users/1    → Delete user

// 📘 Difference Between API and REST
// API	                                                    REST
// API is a way for applications to communicate.	        REST is a set of rules (architecture) for designing APIs.
// API can use different protocols.	                        REST APIs use HTTP protocol.
// API is a broad concept.	                                REST is one type of API.

// Easy way to remember
// API = Communication bridge
// REST = Rules for building that bridge




// POST → Create Data
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Prabhulal"
//   })
// });
// Meaning: Create a new user.

// GET → Read Data
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// Meaning: Fetch all users.

// PUT → Update Entire Data
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Rahul"
//   })
// });
// Meaning: Update user with ID = 1.

// DELETE → Delete Data
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "DELETE"
// });
// Meaning: Delete user with ID = 1.

// 5. Why is this called REST?

// REST says:
// For the resource /users, use standard HTTP methods.

// GET      /users       → Read users
// POST     /users       → Create user
// PUT      /users/1     → Update user
// PATCH    /users/1     → Partially update user
// DELETE   /users/1     → Delete user








// 1. JSON (JavaScript Object Notation)

// JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between a client and a server. It is easy for humans to read and easy for machines to parse.

// Why do we use JSON?
// Suppose your database has:

// ID   Name      City
// 1    Prabhulal Mumbai
// 2    Rahul     Pune

// The server cannot send a database table directly to JavaScript.

// Instead, it converts the data into JSON.

// {
//   "id": 1,
//   "name": "Prabhulal",
//   "city": "Mumbai"
// }

// JavaScript understands this format.
// JSON vs JavaScript Object

// JSON
// {
//   "name": "Prabhulal"
// }

// JavaScript Object
// const user = {
//   name: "Prabhulal"
// };

// Difference

// JSON keys and string values use double quotes.
// JavaScript objects don't require quotes around keys.
// Important Methods

// Convert Object → JSON

// const user = {
//   name: "Prabhulal"
// };

// const jsonData = JSON.stringify(user);
// console.log(jsonData);

// Output
// {"name":"Prabhulal"}

// Convert JSON → Object
// const json = '{"name":"Prabhulal"}';
// const obj = JSON.parse(json);
// console.log(obj.name);

// Output
// Prabhulal

// Interview Question
// Why do APIs return JSON?
// Answer:
// JSON is lightweight, language-independent, and easy to parse, making it ideal for data exchange between clients and servers.




// 📝 Easy Flow to Remember:-

// User clicks button
//         ↓
// JavaScript calls fetch()
//         ↓
// fetch() returns a Promise
//         ↓
// Server processes request
//         ↓
// Server sends JSON response
//         ↓
// response.json() converts JSON
//         ↓
// JavaScript object is created
//         ↓
// Display data on UI