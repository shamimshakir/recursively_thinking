/*=== These Challenges from this gist
https://github.com/JS-Challenges/recursion-prompts/blob/master/src/recursion.js#L58

**=======*/

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





// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if(x >= y)return [];
    if(y - x === 1)return [];

    let results = [];
    results.push(x + 1);
    return results.concat(range(x + 1, y));
};
range(2,9) // [3, 4, 5, 6, 7, 8]





// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
var exponent = function(base, exp) {
    if(exp === 0)return 1;
    if(exp === 1)return base;
     
    return base * exponent(base, exp - 1)
};
exponent(3,3) // 27






// 8. Determine if a number is a powjker of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 1)return true;
    if(n / 2 === 1)return true;
    if(n % 2 !== 0)return false;
    
    n = n / 2
    return powerOfTwo(n)
};
powerOfTwo(16) // true






// 9. Write a function that reverses a string.
var reverse = function(string) {
    if(string === '')return '';

    return reverse(string.slice(1)) + string[0]
};
reverse('string') //gnirts






// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if(string.length <= 1)return true;
    if(string[0] !== string[string.length - 1])return false;

    return palindrome(string.slice(1, -1))
};
palindrome('rotor') //true
