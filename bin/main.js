#! /usr/bin/env node
const list = require("prompt-list")
const args = process.argv.slice(2)
const utils = require("./utils/mainUtils.js")
const packagejson = require("../package.json")
const clear = require("clear")
const banners = require("./utils/ascii-banners")
const orderFrom = new list({
    name: "orderFrom",
    message: "Where would I like to go today?",
    choices: utils.options
})
const main_menu = new list({
    name: "Main Menu",
    choices: [
        "Start",
        "My Coins",
        "Updates"
    ]
})
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
            console.log(`I have ${utils.myCoins()} coins.`)
            break;
        default:
            break;
    }
} else {
    console.log("As of v1.0.0 and up, we recommend to have your console in full screen.")
    fullScreen.ask((i) => {
        if(i === "Yes") {
            mainMenu()
        } else {
            console.log("Exitting in 4 seconds..")
            setTimeout(() => {
                process.exit()
            }, 4000);
        }
    })
}

function mainMenu() {
    clear()
    console.log(`${banners.texturant} Version: v${packagejson.version}`)
    console.log(`\t\t\t\t\t  ${"-".repeat(72)}`)
    main_menu.ask((choice) => {
        switch(choice) {
            case "Start":
                clear()
                orderFrom.ask(function(fchoice) {
                    try {
                        let theTexturant = require(`./texturants/${fchoice.toLowerCase().replace("'", "")}.js`)
                        theTexturant.run(utils, list)
                    } catch (err) {
                        console.log(err)
                    }
                })
                break;
            case "My Coins":
                console.log(`I have ${utils.myCoins()} coins!\n`)
                new list({
                    choices: [
                        "< Back"
                    ]
                }).ask(() => {
                    mainMenu()
                })
                break;
        }
    })
}