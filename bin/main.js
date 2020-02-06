#! /usr/bin/env node
// Everything here we need to use in the main file
const inquirer = require("inquirer")
const args = process.argv.slice(2)
const Utils = require("./files/utils/Utils.js")
const fs = require("fs")
// Ask if the user is in full screen

if(!fs.existsSync(`${__dirname}/files/utils/data.json`)) {
    Utils.coins.init()
    console.log("Initialized data file!")
}

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
        Utils.main.menu()
    } else {
        console.log("\nThings might look weird if you are not in fullscreen.")
        setTimeout(() => {
            Utils.functions.clear()
            Utils.main.menu()
        }, 4000)
    }
})
