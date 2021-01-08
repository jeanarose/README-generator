// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require(generateMarkdown);

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

inquirer
  .prompt([
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
      name: "title",
    },
    {
      type: "input",
      message: questions[3],
      name: "description",
    },
    {
      type: "list",
      message: questions[4],
      name: "license",
      choices: ["MIT", "Apache", "GPL"],
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
      name: "repositoryInfo",
    },
    {
      type: "input",
      message: questions[8],
      name: "contributions",
    },
  ])
  .then((data) => {
    const filename = `${
      data.title.toLowerCase().split(" ").join("") + "-README"
    }.md`;
    fs.writeFile(filename, generateMarkdown.generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("Your README has been created!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
