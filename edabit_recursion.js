//Recursion: Count Vowels
function countVowels(str){
    if(str === '')return 0;

    let count = 0;
    if(/[aeiou]/g.test(str[0]))count++;

    return count + countVowels(str.slice(1))
}
countVowels("apple") //2
