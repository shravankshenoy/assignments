/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //let str1_rev = str1.split("").reverse().join("");
  str1chars = str1.toLowerCase().split("").sort().join("");
  str2chars = str2.toLowerCase().split("").sort().join("");

  return str1chars === str2chars;  

}

module.exports = isAnagram;
