#! /usr/bin/env node
// Everything here we need to use in the main file
const inquirer = require("inquirer")
const args = process.argv.slice(2)
// const Utils = new (require("./files/Utils.js"))()

// Ask if the user is in full screen
inquirer.prompt({
    type: "list",
    name: "fullscreen",
    message: "It is recommended that you use Texturant in a full screen terminal.\n  A    re you in fullscreen?",
    choices: [
        "Yes",
        "No"
    ]
}).then(a => {
    if (a.fullscreen === "Yes") {
        process.stdout.write('\033c');
        // Utils.functions.mainMenu()
    } else {
        process.stdout.write('\033c');
        console.log("Things might look weird if you are not in fullscreen.")
        setTimeout(() => {
            // Utils.functions.mainMenu()
        }, 4000)
    }
})
