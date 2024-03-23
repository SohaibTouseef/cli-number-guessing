#! /usr/bin/env node


import inquirer from "inquirer";

// 1) computer will generate a random number done
// 2) user input for guessing number
// 3) cpmpare user input with computer  generated number and show restult - done

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
  {
    name: "userGusessedNummber",
    type: "number",
    message: "Please guess a  number between 1-10: ",
  },
]);

if (answers.userGusessedNummber === randomNumber) {
  console.log("Congtratulation! you guessed right number.");
} else {
  console.log("You guessed wrong number");
}
