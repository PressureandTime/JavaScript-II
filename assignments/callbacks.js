// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array.
//  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'Notebook', 'yo-yo', 'Gum','Gum',];

/* 

  Given this problem: 
  
  function firstItem(arr, cb) {
    firstItem passes the first item of the given array to the callback function.
  }

  Potential Solution:

  Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, callback) {
  // getLength passes the length of the array into the callback.
  return callback(arr);
}

function length(arr){
  const alfa = console.log(arr.length);
  return alfa;  
}

getLength(items, length);


/////////////////////////////////////////

function last(arr, callback) {
  // last passes the last item of the array into the callback.
  return callback(arr);
}

function lastItem(arr){
  const alfa = console.log(arr[3]);
  return alfa;
}

last(items,lastItem);


function sumNums(x, y, callback) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return callback(x,y);
}

function sumsNumbers(x,y){
  const alfa = console.log(x+y) ;
  return alfa;
}

sumNums(10000,150000,sumsNumbers);



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

function multiply(x,y){
 const alfa = console.log(x*y);
 return alfa;
}

multiplyNums(18,80,multiply);

////////////////////////////////////////////////////////////////////


function contains(items, position, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(items,position);
}

function check(items,position){
  const alfa = items[position] == 'Gum';
  return alfa;
}


console.log(contains(items,4,check));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);

}

function duplicate(array){
  const alfa = new Set(array);
  const convertToArray = Array.from(alfa);
  return convertToArray;
  
}
console.log(removeDuplicates(items, duplicate));