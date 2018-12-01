#! /usr/bin/env node
const list = require("prompt-list")
const args = process.argv.slice(2)
const Utils = new (require("./utils/Utils.js"))()
const fullScreen = new list({
    message: "Are you in full screen?",
    choices: [
        "Yes",
        "No.."
    ]
})

if (args[0]) {
    switch (args[0]) {
        case "money":
            console.log(`I have ${Utils.main.myCoins()} coins.`)
            break;
        default:
            break;
    }
} else {
    console.log("As of v1.0.0 and up, we recommend to have your console in full screen.")
    fullScreen.ask((i) => {
        if(i === "Yes") {
            Utils.functions.mainMenu()
        } else {
            console.log("Exitting in 4 seconds..")
            setTimeout(() => {
                process.exit()
            }, 4000);
        }
    })
}