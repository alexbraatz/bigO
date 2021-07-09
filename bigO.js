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

findIndex(array, 'a'); // 0 (1 iteration - best case)
findIndex(array, 'd') // 3 (4 iterations - worst case)
findIndex(array, 'e') // -1 (4 iterations - worst case)