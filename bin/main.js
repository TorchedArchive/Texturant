#! /usr/bin/env node
// Everything here we need to use in the main file
const inquirer = require("inquirer")
const args = process.argv.slice(2)
const Utils = require("./files/utils/Utils.js")

// Ask if the user is in full screen
inquirer.prompt({
    type: "list",
    name: "fullscreen",
    message: "It is recommended that you use Texturant in a full screen terminal.\n Are you in fullscreen?",
    choices: [
        "Yes",
        "No"
    ]
}).then(a => {
    if (a.fullscreen === "Yes") {
        Utils.functions.clear()
        // Utils.functions.mainMenu()
    } else {
        console.log("\nThings might look weird if you are not in fullscreen.")
        setTimeout(() => {
            Utils.main.mainMenu()
        }, 4000)
    }
})
