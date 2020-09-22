/*
Task 3 - Bracket Notation
👉 Copy this object into a new linked JavaScript file or style tag within html.

let desiredPleasentry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life brother",
  smallTalk: "Warm today isn't it...",
};
👉 Use bracket notation and the desiredPleasentry variable to console.log Ben's greeting phrase.

👉 Change what is console.log-ed by changing the value of desiredPleasentry.
*/

let desiredPleasentry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life brother",
  smallTalk: "Warm today isn't it...",
};

console.log(bensPhrases[desiredPleasentry]);

desiredPleasentry = "farewell";
console.log(bensPhrases[desiredPleasentry]);
