// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is your project's name?",
  "Please write a short description of your project.",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using this repo?",
  "What does the user need to know about contributing to the repo?",
];

  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "gitHubUsername",
    },
    {
        type: "input",
        message: questions[1],
        name: "email",
      },
    {
        type: "input",
        message: questions[2],
        name: "projectName",
    },
    {
        type: "input",
        message: questions[3],
        name: "description",
    },
    {
        type: "input",
        message: questions[4],
        name: "license",
    },
    {
        type: "input",
        message: questions[5],
        name: "commandToInstallDependencies",
    },
    {
        type: "input",
        message: questions[6],
        name: "commandToRunTests",
    },
    {
        type: "input",
        message: questions[7],
        name: "repoInformation",
    },
    {
        type: "input",
        message: questions[8],
        name: "contributions",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
