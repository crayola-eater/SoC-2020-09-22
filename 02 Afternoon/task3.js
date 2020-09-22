/*

Task 3 - Looping and Accessing
We can use the useful loops we learnt yesterday to access the items in an array.

let englishNumbers = ["one", "two", "three", "four", "five"];
👉 Declare an index variable and assign it the value of 0.

👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.

👉 Have the while loop until the index is greater than the array's length property.

*/

let englishNumbers = ["one", "two", "three", "four", "five"];
let index = 0;

while (index < englishNumbers.length) {
  console.log(englishNumbers[index++]);
}
