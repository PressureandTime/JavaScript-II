// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const alfa = "WHATS UP";

function myFunction() {
  console.log(alfa);
  const beta = "NOTHING,MUCH";

  function nestedFunction() {
    console.log(beta);
    const gama = "ALL RIGHT THEN";
    function nestedAnotherOne() {
      const delta = "BYE";
    }
  }
  nestedFunction();
}
myFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.


function multiplier(factor) {
  debugger;
  return function (x) {
    debugger;
    return x * factor;
  };
}

let doubler = multiplier(100);

console.log(doubler(100));

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {

  let alfa = 2;
  let someObject = {
    increment: function () {
      ++alfa;
      console.log(alfa);
    },

    decrement: function () {
      --alfa;
      console.log(alfa);
    }
  };

  return someObject;

};

let bla = counterFactory();
bla.increment();

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.    let test = counter();
// test.increment();