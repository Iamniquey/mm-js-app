const messages = [
  "You are what you say you are.",
  "You are better than your circumstances",
  "Don't let pain define you.",
  "Run your race.",
  "Feed the children.",
  "Feed your soul.",
  "Put God first.",
  "Seek the truth, speak the truth.",
  "Never say never.",
  "You can do anything you set your mind to.",
];

const verbs = [" should", " can", " may"];
const adverbs = [" not", ""];
const timePeriods = [" today", " tomorrow", " next week"];

const randomChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const giveAdvice = () => {
  return `${randomChoice(messages)} So you${randomChoice(verbs)}${randomChoice(
    adverbs
  )} continue with your plans${randomChoice(timePeriods)}.`;
};

console.log(giveAdvice());

// run by typing "node main.js" into the command line
