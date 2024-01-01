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

const randomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

console.log(randomMessage());
