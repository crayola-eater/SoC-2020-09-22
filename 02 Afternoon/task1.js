/*
  Task 1 - Declaring an Array
  Convert these lists of things into JavaScript arrays.

  E.G.

  Example: Favorite Foods
  Cheese
  Chocolate
  Olives
  Anchovies
  Would become...

  let favoriteFoods = ["Cheese", "Chocolate", "Olives", "Anchovies"];
  👉 You do the rest!

  1. Favorite Songs
  Tiny Dancer
  Running Up That Hill
  Don't Stop Moving
  Tragedy
  Crazy Horses
*/

let favouriteSongs = [
  "Tiny Dancer",
  "Running Up That Hill",
  "Don't stop Moving",
  "Tragedy",
  "Crazy Horses",
];

/*
  2. Profit From First Seven Days of Chris' Penny Doubling Pyramid Scheme
    1
    2
    4
    8
    16
    32
    64
*/

const firstSevenDays = [1, 2, 4, 8, 16, 32, 64];
let profit = 0;

for (let i = 0; i < firstSevenDays.length; ++i) {
  profit += firstSevenDays[i];
}

// Maybe could also do:
//    let profit = (2 ** firstSevenDays.length) - 1
//    OR let profit = firstSevenDays.reduce((total, n) => total + n, 0)

/*
  3. SoC Team (hint: combine with your morning knowledge)
  Name is Ben, special skill is code rapping.
  Name is Tao, special skill is hand raising.
  Name is Lizzie, special skill is being friendly.
  Name is Liz.K, special skill is crotchet.
  Name is Mell, special skill is winning quizzes.
  Name is Chris, special skill is changing lives.
  Name is Tim, special skill is kitchen based analogies.
  Name is James, special skill is mannequin friendship.
  Name is Banwo, special skill is having accidents.
*/

const socTeam = [
  { name: "Ben", specialSkill: "Code rapping" },
  { name: "Tao", specialSkill: "Hand raising" },
  { name: "Lizzie", specialSkill: "Being friendly" },
  { name: "Liz.K", specialSkill: "Crotchet" },
  { name: "Mell", specialSkill: "Winning quizzes" },
  { name: "Chris", specialSkill: "Changing lives" },
  { name: "Tim", specialSkill: "Kitchen based analogies" },
  { name: "James", specialSkill: "Mannequin friendship" },
  { name: "Banwo", specialSkill: "Having accidents" },
];

// Below is a lazier, dynamic alternative to typing the above array out
// manually (as was done above).

const someText = `
  3. SoC Team (hint: combine with your morning knowledge)
  Name is Ben, special skill is code rapping.
  Name is Tao, special skill is hand raising.
  Name is Lizzie, special skill is being friendly.
  Name is Liz.K, special skill is crotchet.
  Name is Mell, special skill is winning quizzes.
  Name is Chris, special skill is changing lives.
  Name is Tim, special skill is kitchen based analogies.
  Name is James, special skill is mannequin friendship.
  Name is Banwo, special skill is having accidents.
`;

const alsoSocTeam = [
  ...someText.matchAll(
    /Name is (?<name>.+?), special skill is (?<specialSkill>.+?)\./g
  ),
].map((o) => {
  const {
    groups: { name, specialSkill },
  } = o;
  return { name, specialSkill };
});
