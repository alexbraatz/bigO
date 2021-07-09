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