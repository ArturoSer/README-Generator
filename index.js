const fs = require("fs");

const inquirier = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [

    {
        type: "input",
        message: "What is the title of your Project?",
        name: "Project",
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        name: "Description",
    },
    {
        type: "input",
        message: "What is the installation of your Project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is the usage of your Project?",
        name: "Usage",
    },
    {
        type: "list",
        message: "What is the license of your Project?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"],
        name: "License",
    },
    {
        type: "input",
        message: "What is the contribution guidelines of your Project?",
        name: "Contribution",
    },
    {
        type: "input",
        message: "What is the test of your Project?",
        name: "Test",
    },
    {
        type: "input",
        message: "What are the questions of your Project?",
        name: "Question",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    },
];

function askQuestions() {
    inquirier
    .prompt(questions)
    .then ((answers) => {
        console.log(answers);
        const markdown = generateMarkdown(answers);
        writeToFile(markdown);
    })
}

function writeToFile(data) {
    fs.writeFile("./newfileREADME.md", data, (err) => err ? console.error(err) : console.log("Success"))
}

function init() {
    askQuestions();
}

init();