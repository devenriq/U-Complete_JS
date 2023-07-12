"use strict";

// let hello = "hello";
// console.log(hello);

// const bills = [125, 555, 44];
// const tips = [];

// const calcTip = (billsList) => {
//   for (let i = 0; i < billsList.length; i++) {
//     let temp = 0;
//     billsList[i] > 50 && billsList[i] < 300
//       ? (temp = billsList[i] * 0.15)
//       : (temp = billsList[i] * 0.2);
//     tips.push(temp);
//   }
// };

// calcTip(bills);

// console.log(tips);

// const enrique = {
//   firstName: "enrique",
//   lastName: "Furtado",
//   age: 83,
//   job: "Pilot",
//   friends: ["Michael", "Peter", "Susan"],
// };

// let bestFriend = console.log(
//   `${enrique.firstName} has ${
//     enrique.friends.length
//   } friends and his best friend is ${
//     enrique.friends[Math.floor(Math.random() * enrique.friends.length)]
//   }`
// );

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const temperatureAmplitude = (listOfTemperatures) => {
//   const temperaturesNumbers = [];
//   for (let i = 0; i < listOfTemperatures.length; i++) {
//     const element = listOfTemperatures[i];
//     if (typeof element === "number") {
//       temperaturesNumbers.push(element);
//     }
//   }
//   for (let i = 0; i < temperaturesNumbers.length - 1; i++) {
//     for (let j = 0; j < temperaturesNumbers.length - 1 - i; j++) {
//       if (temperaturesNumbers[j] > temperaturesNumbers[j + 1]) {
//         let temp = temperaturesNumbers[j];
//         temperaturesNumbers[j] = temperaturesNumbers[j + 1];
//         temperaturesNumbers[j + 1] = temp;
//       }
//     }
//   }

//   const min = temperaturesNumbers[0];
//   const max = temperaturesNumbers[temperaturesNumbers.length - 1];

//   return max - min;
// };

// console.log(temperatureAmplitude(temperatures));

// const temperatureAmplitudeAlternative = (array) => {
//   let listOfValues = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (typeof element === "number") {
//       listOfValues.push(element);
//     }
//   }

//   const min = Math.min(...listOfValues);
//   const max = Math.max(...listOfValues);
//   return max - min;
// };

// console.log(temperatureAmplitudeAlternative(temperatures));

const temperatureAmplitudeAlternativeAlternative = (array) => {
  let minValue = array[0],
    maxValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) minValue = array[i];
    if (array[i] > maxValue) maxValue = array[i];
  }

  return maxValue - minValue;
};

console.log(temperatureAmplitudeAlternativeAlternative(temperatures));
