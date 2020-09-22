/*
Task 5 - nested objects
let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};
👉 Using dot notation, read the text from the communication object and store in a variable.

👉 If the priority is urgent, then console.log the variable, else do nothing.

*/

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let text = communication.payload.message.text;

if ("URGENT" === communication.payload.message.priority) {
  console.log(text);
}
