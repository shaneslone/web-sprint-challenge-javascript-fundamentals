// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can acess internal because it is a closure.  Closure allow functions to acess code that is defeined within it's scope.  In JavaScript functions can reach outside of their function to access variables, but not the other way around.  If we tried to console.log internal from outside of myFunction it wouldn't work, because scope only works outword, not inward.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = number => {
  let counter = 0;
  const innerFunction = () => {
    for (let i = number; i > 0; i--) {
      counter += i;
    }
  };
  innerFunction();
  return counter;
};

console.log(summation(4));
