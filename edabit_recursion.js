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





//Recursion: GCD
function GCD(a, b){
    /**** Very good Explaination ***/
    //https://www.youtube.com/watch?v=H8jbNa6lcB4&feature=youtu.be

    if(a % b === 0)return b;

    return GCD(b, a % b)
}
GCD(14,48)






//Length of a Nested Array
function getLength(arr) {
	flatArr = []
	function flattenArr(arr){
	for(let elem of arr){
	    if(Array.isArray(elem)){
		flattenArr(elem)
	    }else{
		flatArr.push(elem)
	    }
	}
    }  
    flattenArr(arr)
    return flatArr.length
}
getLength([1, [2, [3, [4, [5, 6]]]]])    // ➞ 6
