/**
 * Created by syedraza on 11/19/17.
 */


"use strict";

(function (){

    // var button = document.getElementById('btn');
    // var first = document.getElementById('first');
    // var second = document.getElementById('second');
    // var third = document.getElementById('third');
    //
    // button.addEventListener('click',clicked);
    // first.addEventListener('click',clicked);
    // second.addEventListener('click',clicked);
    // third.addEventListener('click',clicked);
    //
    //
    // function clicked () {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     console.log(event);
    //     console.log('i am clicked by in : ', this);
    // }

    //pseudo classical inheritance implemented
   // constructor pattern

    // class defines the behavior of the object

   function Person (firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
   }

   // var dude = Person('asim','hussain');
    var dude = new  Person('asim','hussain');
   console.log(dude);

   // second method using call

    Person.call(dude, 'ai','jk');

    console.log(dude);

})();