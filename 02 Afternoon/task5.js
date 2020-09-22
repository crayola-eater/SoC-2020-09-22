/*

Task 5 - Looping and Reassigning
let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here

console.log(words);
👉 Use a for loop to iterate over the words array and add the letter t to the end of each word.

*/

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i < words.length; ++i) {
  words[i] += "t"; // String concatenation okay here as only done once per iteration.
}
