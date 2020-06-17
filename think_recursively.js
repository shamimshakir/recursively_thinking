
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





// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
    /***** Using Array Reduce **********/
    // return array.reduce((acc, value) => {
    //     return acc += Array.isArray(value)?arraySum(value):value;
    // },0)

    /****** Regular Way | Iterative and recursive ********/
    let sum = 0;
    array.forEach(elem => {
        if(Array.isArray(elem)){
            sum += arraySum(elem)
        }else{
            sum += elem
        }
    })
    return sum
};
arraySum([1,[2,3],[[4]],5])    // 15





// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0){
        return true;
    }else if(n === 1){
        return false;
    }else{
        return isEven(n - 2)
    }
};
isEven(8) // true




// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n <= 0)return 0;
    return n + sumBelow(n - 1) - 1
};
sumBelow(10)  //45
