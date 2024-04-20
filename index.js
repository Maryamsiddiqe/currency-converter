#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    CNY: 0.14,
    AUD: 0.64,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: " Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CNY", "AUD"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CNY", "AUD"]
    },
    {
        name: "amount",
        message: "enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
