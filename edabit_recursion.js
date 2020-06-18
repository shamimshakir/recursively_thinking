//Recursion: Count Vowels
function countVowels(str){
    if(str === '')return 0;

    let count = 0;
    if(/[aeiou]/g.test(str[0]))count++;

    return count + countVowels(str.slice(1))
}
countVowels("apple") //2




//The Fibonacci Number | start with 1
function fibonacci(num) {
	if(num === 0)return 1;
	if(num <= 2)return num;
	return fibonacci(num -1) + fibonacci(num - 2)
}
fibonacci(7)   //21
