const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// const axios = require("axios");



inquirer
    .prompt({
        message: "Enter your Github username: ",
        name: "username"
    })
    .then(function({username}){
        const githubURL = "https://github.com/" + username;

        return githubURL;
    })