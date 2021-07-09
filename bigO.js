// <<-- Constant-Time Algorithm ->>
// O(1) - "Order 1"
// On this order, regardlesss of the complexity (number of items)
// the time (iterations) is constant

// You will see this on algorithms that return an element in an already
// known position of an array, regardless kind or length

// ex. code: 
const getLast = items => items[items.Length-1]

// ex. case:
getLast(['a', 'b', 'c', 'd']); //d (1 iteration)

getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']); //g (1 iteration)


// <<--- Linear-Time Algorithm ---->>
// O(N) - "Order N"
// Here, the worst case time (iterations) grows on par with number of items
// i.e. for N elements, you will require N iterations

// ex. code
const findIndex = (items, match) => {
  for ( let i = 0, total = items.length; i < total; i++)
    if ( items[i] == match)
      return i;
    
  return -1; 
}

// ex. case
const array = ['a', 'b', 'c', 'd'];

console.log( findIndex(array, 'a') ); // 0 (1 iteration - best case)
console.log( findIndex(array, 'd') )// 3 (4 iterations - worst case)
console.log( findIndex(array, 'e') )// -1 (4 iterations - worst case)


// <<--- Quadratic-Time Algorithm ---->>
// O(N^2) - "Order N Squared"
// This kind of order, the worst time (iterations) is the 
// square of the number of inputs. The time grows exponentially 
// related to the number of inputs

// ex. code
const buildSquareMatrix = items => {
  let matrix = [];

  for ( let i = 0, total = items.length; i < total; i++){
    matrix[i] = [];

    for ( let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }

  return matrix
}

// ex. case
console.log( buildSquareMatrix(['a','b', 'c']) ); // 9 iterations, 3 elements returns:
/*
[
  ['a','b', 'c'],
  ['a','b', 'c'],
  ['a','b', 'c'],
]
*/