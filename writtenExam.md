- [x] **Question 1**

**What are the pros and cons of using TypeScript and JavaScript respectively?**

TypeScript

pros:

- TypeScript helps in code organising with better readability.
- TypeScript allows us to define types to variable which enchances the autocompletion of VS code.

cons:

- TypeScript has more restriction on syntax.
- TypeScript has a more complicated setup process.

JavaScript

pros:

- JavaScript is easier to learn and code.
- JavaScript has fewer steps to start a project.

cons:

- JavaScript has worse autocompletion because it lacks of type assignation.
- If we are dealing with a lot of code, JavaScript may not provide us good readability.

* [x] **Question 2**

**What are the advantages of storing data in PostgreSQL over storing data in JSON file?**

PostgreSQL is a relational database which can store data more organised in the form of tables. Also, it let us manipulate data in a easier way when the data are stored in the form of tables. If data are stored in a JSON file, we probably need to store them in a layer by layer object. Which means when we have to manipulate data, it is more complicated to access to the data in a JSON object with multiple layers.

- [x] **Question 3**

**Explain the similarities and differences between using a local-authentication mechanism and a social login authentication mechanism for your web application.**

Local-authentication and social login authentication are both validation methods. They are used as verifying if you are a registered user on their website. However, local-authentication using user inputs including username or email and password, compares with the users' data stored in the database. On the other hand, social login authentication verifies user's identity through third party provider verification service such as Google OAuth 2.0.

- [x] **Question 4**

**Explain how Express middlewares architecture works.**

Express middlewares can use three parameters which are request, response and next function. They can be used to modify the request content, give response to the client or use the next function to connect with another route handler.

- [x] **Question 5**

**Why does Node.js have so many callback-based APIs ?**

It is because Node.js is a single threaded and uses non-blocking (asynchronous) I/O model. It can only handle one line of code at a time. Also, it performs input and output operation asynchronously.

- [x] **Question**

**Explain what happens when a user submits a synchronous HTML form submission to a Express.js server and gets redirected to another page with a success message.**

When a user submits a synchronous HTML form submission to a Express.js server, the form input values will be sent to the server in the request body object which using the name attribute of the HTML form tag as the key of the objeect. After the request action and method matches the path and the method in the server respectively, the request body data may be inserted into the PostgreSQL database or JSON file or simply be used to do validation work. After the data are handled, the server will give a response with a status code of successful submission which may be "301" and redirect to another HTML page by the redirect method of express.Response.

- [x] **Question 7**

**What are the main differences between ordinary classes, interfaces and abstract classes in TypeScript?**

Ordinary classes are used for object creation, encapsulation for fields, methods. Only ordinary classes can be solely instantiated to create an object. They can extend only one class and can implement any number of the interface.

Interfaces are used to create a structure for an entity. They cannot provide encapsulation function. They cannot have a constructor as well. They can extend more than one interfaces but cannot implement any interface.

Abstract classes are classes that cannot instantiated on its own. It should be implemented to the subclasses in order to create an object by new instance. Also, they do not support multiple inheritances.

- [x] **Question 8**

**Explain why AJAX and Restful is necessary if we want to load data without refreshing the web page.**

It is because we usually need to connect to the server if we want to load data. However, it has to refresh the web page if we soley use server to give response to the client side. On the other hand, using AJAX and Restful can solve the problem of refreshing the web page. We can fetch data by using path and method matches the server route. After the server sends the data in JSON string format, we deserialise them and we can load the JSON format data to the web page without refreshing.

- [x] **Question 9**

**What are the main advantages of using Promise or Async/Await based API over Callback based API?**

Promise or Async/Await based API are better than Callback based API because former can prevent the problem of Callback hell which means nested functions that have a lot of callbacks inside of callbacks. In order to let our code become more readable and maintainable we should prevent Callback hell.

- [x] **Question 10**

**Why do we need to join multiple tables together in SQL database?**

Joins are used to combine the rows from multiple tables using mutual columns in order to let us manipulate data in multiple tables with a single query.
