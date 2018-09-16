#! /usr/bin/env node
const list = require("prompt-list")
const args = process.argv.slice(2)
const utils = require("./utils/mainUtils.js")
const packagejson = require("../package.json")
const clear = require("clear")
const orderFrom = new list({
    name: "orderFrom",
    message: "Where would I like to go today?",
    choices: [
        "MacDonalds",
        {name: "Burger King", disabled: "Not done yet"},
        {name: "Wendy's", disabled: "Not done yet"},
        {name: "Chick-fill-A", disabled: "Not done yet"}
    ]
})
const mainMenu = new list({
    name: "Main Menu",
    choices: [
        "Start",
        "My Coins",
        "Updates"
    ]
})

if (args[0]) {
    switch (args[0]) {
        case "money":
            console.log(`I have ${utils.myCoins()} coins.`)
            break;
        case "update":
            console.log("Coming soon.")
            break;
        default:
            break;
    }
} else {
    clear()
    console.log(" _____         _                         _   \n" + 
    "|_   _|____  _| |_ _   _ _ __ __ _ _ __ | |_ \n" +
    "  | |/ _ \\ \\/ / __| | | | '__/ _` | '_ \\| __|\n" +
    "  | |  __/>  <| |_| |_| | | | (_| | | | | |_ \n" +
    "  |_|\\___/_/\\_\\\\__|\\__,_|_|  \\__,_|_| |_|\\__|" + ` Version: v${packagejson.version}`)
    console.log("-".repeat(64))
    mainMenu.ask((choice) => {
        switch(choice) {
            case "Start":
                clear()
                orderFrom.ask(function(fchoice) {
                    try {
                        let theTexturant = require(`./texturants/${fchoice.toLowerCase()}.js`)
                        theTexturant.run(list)
                    } catch (err) {
                        console.log(err)
                    }
                })
                break;
        }
    })
}