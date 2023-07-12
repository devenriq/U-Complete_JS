"use strict";

let hello = "hello";
console.log(hello);

const bills = [125, 555, 44];
const tips = [];

const calcTip = (billsList) => {
  for (let i = 0; i < billsList.length; i++) {
    let temp = 0;
    billsList[i] > 50 && billsList[i] < 300
      ? (temp = billsList[i] * 0.15)
      : (temp = billsList[i] * 0.2);
    tips.push(temp);
  }
};

calcTip(bills);

console.log(tips);

const enrique = {
  firstName: "enrique",
  lastName: "Furtado",
  age: 83,
  job: "Pilot",
  friends: ["Michael", "Peter", "Susan"],
};

let bestFriend = console.log(
  `${enrique.firstName} has ${
    enrique.friends.length
  } friends and his best friend is ${
    enrique.friends[Math.floor(Math.random() * enrique.friends.length)]
  }`
);
