// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your full name?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHubUserName",
  },
  {
    type: "input",
    message: "What is the current year?",
    name: "year",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What kind of license should your project have?",
    name: "license",
  },
  {
    type: "input",
    message: "How is your project installed?",
    name: "installation",
  },
  {
    type: "input",
    message: "What does the user need to know about using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributions",
  },
  {
    type: "input",
    message: "What tests would you like users to run for your app?",
    name: "tests",
  },
];

const promptUser = () => {
  inquirer.prompt([...questions]).then((data) => {
    const filename = `${
      data.title.toLowerCase().split(" ").join("") + "-README"
    }.md`;
    fs.writeFile(filename, generateMarkdown.generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("Your README has been created!")
    );
  });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser();
};

// Function call to initialize app
init();