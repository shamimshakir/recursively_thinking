
// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
const factorial = function(n) {
    if(n === 1)return 1;
    return n * factorial(n - 1)
};
factorial(5) //120




// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    if(array.length <= 0)return 0;
    return array[0] + sum(array.slice(1))
};
sum([1,2,3,4,5,6]); //21
