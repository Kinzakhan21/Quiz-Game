#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\t welcome to kinza's Typescript quiz\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a==b", "a===b", "a=b", "a!==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which  of the following is commonlly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which operator is commonlly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log(chalk.greenBright("1.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1.Incorrect!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.greenBright("2.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("2.Incorrect!"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.greenBright("3.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("3.Incorrect!"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.greenBright("4.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("4.Incorrect!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.greenBright("5.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("5.Incorrect!"));
}
console.log(chalk.redBright(`Score: ${score}`));
console.log(chalk.magentaBright("\t thank you for taking this quiz\n"));
