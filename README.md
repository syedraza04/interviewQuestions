# Javascript Interview Questions

## What are JavaScript types

Following are the JavaScript types:
- Number
- String
- Boolean
- Function
- Object
- Null
- Undefined

## Why Javascript

JavaScript is faster. JavaScript is a client-side language and thus it does not need the
assistance of the web server to execute, and most browsers are compatible JS only

##  What are undeclared and undefined variables?

Undeclared variables are those that do not exist in a program and are not declared. If the
program tries to read the value of an undeclared variable, then a runtime error is encountered.

Undefined variables are those that are declared in the program but have not been given any
value. If the program tries to read the value of an undefined variable, an undefined value is
returned.

## What is ‘this’ keyword in JavaScript?

‘This’ keyword is used to point at the current object in the code. For instance: If the code is
presently at an object created by the help of the ‘new’ keyword, then ‘this’ keyword will point
to the object being created.

## Problem with timers

Timers are operated within a single thread, and thus events might queue up, waiting to be
executed.

##  What is the difference between ViewState and SessionState?

### ViewState is specific to a page in a session.
### SessionState is specific to user specific data that can be accessed across all pages in the
web application.

## Explain how to read and write a file using JavaScript?

   There are two ways to read and write a file using JavaScript

   Using JavaScript extensions

   Using a web page and Active X objects

## JS pass by value or reference

Javascript always passes by value, but in an array or object, the value is a reference to it,

## Explain how to detect the operating system on the client machine?

   In order to detect the operating system on the client machine, the navigator.appVersion string
   (property) should be used.

## What is the function of delete operator?

   The functionality of delete operator is used to delete all variables and objects in a program but it

   cannot delete variables declared with VAR keyword

## What are JavaScript Cookies?

   Cookies are the small test files stored in a computer and it gets created when the user visits the
   websites to store information that they need. Example could be User Name details and
   shopping cart information from the previous visits

## Explain what is pop()method in JavaScript?

   The pop() method is similar as the shift() method but the difference is that the Shift method
   works at the end of the array

## What are the different types of errors in JavaScript?

   There are three types of errors:

   Load time errors: Errors which come up when loading a web page like improper syntax

   errors are known as Load time errors and it generates the errors dynamically.

   Run time errors: Errors that come due to misuse of the command inside the HTML

   language.

   Logical Errors: These are the errors that occur due to the bad logic performed on a

   function which is having different operation.

## How many ways to create Objects ?

   Using the Object() constructor:

   ```
   var d = new Object();
   ```

   This is the simplest way to create an empty object. I believe it is now discouraged.

   Using Object.create() method:

   ```
   var a = Object.create(null);
   ```

   This method creates a new object extending the prototype object passed as a parameter.

   Using the bracket's syntactic sugar:

   ```
   var b = {};
   ```

   This is equivalent to Object.create(null) method, using a null prototype as an argument.

   Using a function constructor

   ```
   var Obj = function(name) {
     this.name = name
   }
   var c = new Obj("hello");

   ```
##  Explain window.onload and onDocumentReady?

The onload function is not run until all the information on the page is loaded. This leads to a
substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation
of the code.

## assign values to an array ?

array.push();
array[array.length]= value;

## What is the difference between .call() and .apply()?

   The function .call() and .apply() are very similar in their usage except a little difference. .call() is
   used when the number of the function’s arguments are known to the programmer, as they have
   to be mentioned as arguments in the call statement. On the other hand, .apply() is used when
   the number is not known. The function .apply() expects the argument to be an array

## Explain the role of deferred scripts in JavaScript?

   By default, the parsing of the HTML code, during page loading, is paused until the script has not
   stopped executing. It means, if the server is slow or the script is particularly heavy, then the
   webpage is displayed with a delay. While using Deferred, scripts delays execution of the script
   till the time HTML parser is running. This reduces the loading time of web pages and they get
   displayed faster.

## Array slice() vs splice()

   slice

   slice retuns the sliced array but dont change the original array

   splice

   splice change the original array

   delete just creates a hole in ur array. dont delete element, use splice/ slice

   forEach

   forEach dont return anything. it just run the callback functionf or each element of the array

   map

   returns new array by executing the callback function for each elements of the array


   filter

   if the condition is true for an element, element is picked for the return array

   ```
   [1,2,3,4,5,6,7].filter(function(elem, index, arr){
       return index % 2==0;
     });
     = [1, 3, 5, 7]
   ```
   reduce

   reduce cache the value. for example u want to get the sum of all the element. alternatively, you can initially

    ```
    [1, 2, 3, 4].reduce(function(sum, el, idx, arr){
      return sum + el;
    })
     = 10

    [1, 2, 3, 4].reduce(function(sum, el, idx, arr){
      return sum + el;
    }, 100)
     = 110
    ```

    check array

    Array.isArray([]);
```

var dd = 'that JS Dude';

dd.filter(function (el, idx){
  return idx>7;
})
 = TypeError: Object that JS Dude has no method 'filter'


[].filter.call(dd, function(el, idx){
 return idx>7;
})
 = ["D", "u", "d", "e"]
```

best Practices:

   use strict
