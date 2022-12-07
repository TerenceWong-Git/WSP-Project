WSP012

What are the pros and cons of using TypeScript and JavaScript respectively?

The pros of TypeScript and thus the cons of JavaScript are as follows, - Using TypeScript improves readability and maintainence for large code base. - Using TypeScript improves IDE and Editor support for autocompletion and refactorization. The pros of JavaScript and the cons of TypeScript are as follows, - TypeScript has more concepts than JavaScript to learn which results in a steeper learning curve. - Typescript requires extra compilation which makes settuping enviorment for TypeScript more complex

What are the advantages of storing data in PostgreSQL over storing data in JSON file?

PostgreSQL allows concurrent access to the data by using database transaction while plain JSON file does not solve concurrent access issue. PostgreSQL can also improve read performance by adding database index. Lastly, PostgreSQL supports SQL(Structured Query Language) which is very flexible specially designed for data access.

Explain the similarities and differences between using a local-authentication mechanism and a social login authentication mechanism for your web application.

Both local-authentication and social login authentication are valid methods of authentication for modern web application by verifying the credentials provided by the users. Local authentication makes use of the credentials in the application database to verify the users' credentials while Social Login delegates the verification to 3rd-party provider like Google via the open source standard called OAuth.

Explain how Express middlewares architecture works.

Express provides all of its functionalities with middleware. Every middleware accepts three parameters: request, response and next function. Every middleware can modify the content of the request and choose to reply the response by writing to the response headers and body. A middleware could also calls the next function to delegate the response writing logic to the next middleware in order. All of the route handlers in express are middlewares actually.

Why does Node.js have so many callback-based APIs ?

Node.js is based on a JavaScript engine called V8 which is initially designed for the chrome browser. Therefore Node.js has an single-threaded architecture which has one event loop running indefinitely. All of the I/O related operations are delegated to the worker threads which prevent the main thread to be blocked. Once the I/O operations are finished, the results of the operation is returned to the main thread with callbacks. That is why many of the Node.js API are callback based before Promise is introduced to make writing asynchronous code easier in Node.js.

Explain what happens when a user submits a synchronous HTML form submission to a Express.js server and gets redirected to another page with a success message.

When a user submits a synchronous HTML form submission to an express server. A HTTP request is sent to the express server. The express server receives the request and starts to find the corresponding route handler to handle this request. It is possibly in this process, the data submitted is inserted to a SQL database. Once the operation has finished, the route handler replies the request with a HTTP response with a code like 301 which tells the browser to redirect to another page with a success message.

What are the main differences between ordinary classes, interfaces and abstract classes in TypeScript?

In Typescript, classes are blueprint of object which allows programmers to instantiate new instance with the keyword new. Interfaces specifies the methods but does not include any implementation. Therefore any object choose to implement the interface could have a different implementation. It is the concept of polymorphism. Abstract classes are classes with some methods without implementation. However, abstract classes still can have concrete methods which have the implementation . The keyword new cannot be used on both interfaces and abstract classes.

Explain why AJAX and Restful is necessary if we want to load data without refreshing the web page.

By default form submissions are synchronous in browser which refreshs the entire web page. AJAX (Asynchronous JavaScript and XML ) is a mechanism of browser which allows programmers to send asynchronous HTTP request to server without refreshing the entire page. Restful API is an convention of designing API by using mostly nouns for API names and HTTP verb to denote the intentions of the request. Since mostly AJAX request is going to get HTTP response with JSON string as the body, it works well with Restful API.

What are the main advantages of using Promise or Async/Await based API over Callback based API?

Callback based API cannot compose well. Because callback based API cannot have a proper return value just like what we used to do in synchronous programming. Promise or Async/Await allows programmers to use promise as if it is ordinary object. Async/Await or Promise can avoid the problem of callback hell effectively.

Why do we need to join multiple tables together in SQL database?

Because we needs to store the data in the table with a normalized form in SQL database. Storing data this way is important because it reduces duplication of data. In order to query related data from database, we need to use the join feature in SQL to connect related data in a single query. Therefore, using join SQL is one of the most important skill to use SQL effectively.
