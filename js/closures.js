// CLOSURES

// scope refers to the region where variables are defined
// lexical scope refers to when a function has an inner function
    // the inner fn has access to the parent variables
    // the parent does not have access to the child fns variables
// closures are created when you create a fn inside a fn


// inner functions can modify the variables defined in the outer fn
function myObject() {
  var myVal = 1;
  return {
    display: function() {
      return console.log(myVal);
    },
    increment: function() {
      return console.log(myVal++);
    }
  }
}

var myThing = myObject();
myThing.display(); // 1
myThing.increment();
myThing.display(); // 2

var otherThing = myObject();
otherThing.display(); // 1

// closures remember the value in the environment they're created in

// IFEE
// you make the function an expression by wrapping it in parentheses
// this allows it to be invoked immediately

(function() {
  console.log('I am an IFFE');
})();
