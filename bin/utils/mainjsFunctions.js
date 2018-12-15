const clear = require("clear")
const Utils = new (require("./Utils"))()
const pkg = require("../../package.json")
const semver = require("semver")
const list = require("prompt-list")
const main_menu = new list({
    name: "Main Menu",
    choices: [
        "Start",
        "My Coins",
        "Updates",
        "Exit"
    ]
})
const orderFrom = new list({
    name: "orderFrom",
    message: "Where would I like to go today?",
    choices: Utils.main.options
})

const functions = {
    mainMenu: function() {
        noExportMenu()
    }
}

function goBack() {
    return new (require("prompt-list"))({
        message: "Back to main menu",
        choices: [
            "Back"
        ]
    }).ask(() => {
        noExportMenu()
    })
}

function noExportMenu() {
    clear()
    console.log(`${Utils.banners.texturant} Version: v${pkg.version}`)
    console.log(`\t\t\t\t\t  ${"-".repeat(72)}`)
    main_menu.ask((choice) => {
        switch(choice) {
            case "Start":
                clear()
                orderFrom.ask((fchoice) => {
                    try {
                        let theTexturant = require(`../texturants/${fchoice.toLowerCase().replace("'", "")}.js`)
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
                    const myversion = pkg.version

                    if(semver.compare(myversion, version) === -1) {
                        console.log(marked(`Your version of Texturant (v${myversion}) is **outdated**! Please update to __v${version}__`))
                    } else {
                        console.log(`Your version of Texturant (v${myversion}) is up to date.`)
                    }
                })
                break;
            case "Exit":
                console.log("Exitting Texturant..")
                setTimeout(() => process.exit(), 3000)            
        }
    })
}
module.exports = functions;