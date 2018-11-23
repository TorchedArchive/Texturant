#! /usr/bin/env node
const list = require("prompt-list")
const args = process.argv.slice(2)
const Utils = new (require("./utils/Utils.js"))()
const packagejson = require("../package.json")
const clear = require("clear")
const semver = require("semver")
const TerminalRenderer = require('marked-terminal');
const marked = require('marked').setOptions({
  renderer: new TerminalRenderer()
});
const orderFrom = new list({
    name: "orderFrom",
    message: "Where would I like to go today?",
    choices: Utils.main.options
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
            console.log(`I have ${Utils.main.myCoins()} coins.`)
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
    console.log(`${Utils.banners.texturant} Version: v${packagejson.version}`)
    console.log(`\t\t\t\t\t  ${"-".repeat(72)}`)
    main_menu.ask((choice) => {
        switch(choice) {
            case "Start":
                clear()
                orderFrom.ask((fchoice) => {
                    try {
                        let theTexturant = require(`./texturants/${fchoice.toLowerCase().replace("'", "")}.js`)
                        theTexturant.run(Utils, list)
                    } catch (err) {
                        console.log(err)
                    }
                })
                break;
            case "My Coins":
                console.log(`I have ${Utils.main.myCoins()} coins!\n`)
                goBack()
                break;

            case "Updates":
                require("request").get("https://api.npms.io/v2/search?q=texturant", (err, res) => {
                    if(err) return console.log("Could not check for latest version!")

                    const result = JSON.parse(res.body)
                    if(result.code) return console.log("Could not check for latest version! Try again later.")
                    const version = result.results[0].package.version
                    const myversion = packagejson.version

                    if(semver.compare(myversion, version) === -1) {
                        console.log(marked(`Your version of Texturant (v${myversion}) is **outdated**! Please update to __v${version}__`))
                    } else {
                        console.log(`Your version of Texturant (v${myversion}) is up to date.`)
                    }
                })
                break;                
        }
    })
}