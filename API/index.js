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

