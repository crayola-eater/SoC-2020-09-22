/*
Task 6 - Get Experimental
Explore objects more by...

making some that represent things in the real world
nesting loads of objects
refactoring the password-checker to store the password and the secret information in an object
*/

const building = {
  windows: 100,
  floors: 5,
  doors: 200,
};

const family = {
  mom: {
    age: 30,
  },
  dad: {
    age: 32,
  },
  kid1: {
    age: 70,
  },
};

const trees = {
  trunk: 1,
  hasLeaves: true,
  hasTreeHouse: false,
  leaves: 2000,
};

/*
  Yesterday's function refactored to use objects.
*/

const myObject = {
  password: "password123",
  secret: "My secret: I'm always hungry",
};

// Should return a boolean indicating whether argument matches password.
const isPassword = (textToCheck) => textToCheck === myObject.password;

// Should log an interpolated string advising of attempts left.
const sayAttemptsLeft = (attemptsLeft) =>
  console.log(`You have ${attemptsLeft} attempts left.`);

// Should prompt user for a password and return user's input.
const getPasswordFromUser = () => prompt("Please enter a password.");

const authenticateUser = () => {
  for (let attempts = 3; attempts > 0; ) {
    if (isPassword(getPasswordFromUser())) {
      return true;
    }
    sayAttemptsLeft(--attempts);
  }
  return false;
};

if (authenticateUser()) {
  console.log(myObject.secret);
}
