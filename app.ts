#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
//Printing a Welcome Message
console.log("\n\twelcome To \'KhalidHussain\' - CLI simple calculator\n");

//Asking Questions from Users Through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter Fisrt Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// Conditional statement if-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)

}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("invalid input")
}