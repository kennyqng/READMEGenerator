const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const md = require("./utils/md");

inquirer
    .prompt([
        {
            message: "Enter your Github username: ",
            name: "username"
        },
        {
            message: "What is your email?",
            name: "email"
        },
        {
            message: "What is the URL to your project? ",
            name: "website"
        },
        {
            message: "What is your project's name?",
            name: "project"
        },
        {
            message: "Please write a short description of your project.",
            name: "description"
        },
        {
            message: "What kind of license should your project have?",
            name: "license",
            type: "list",
            choices: ["MIT", "APACHE%2.0", "GPL%3.0", "BSD%3", "None"]
        },
        {
            message: "What command should be run to install dependencies?",
            name: "installation"
        },
        {
            message: "What command should be run to run test?",
            name: "tests"
        },
        {
            message: "What does the user need to know about using the repo?",
            name: "instruction"
        },
        {
            message: "What does the user need to know about contributing to the repo?",
            name: "contributing"
        },
    ])
    .then(function(data){

        fs.writeFile("README.md", md.generateMarkdown(data), function(err) {

            if (err) {
              console.log(err);
            }
            else {
              console.log("Save!");
            }
          
          });
    })


// const greeting = "hello";
// console.log(md.createMd(greeting));
// console.log(greeting);  
