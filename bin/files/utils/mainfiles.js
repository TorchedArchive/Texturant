const Utils = require("./Utils.js")
const pkg = require("../../../package.json")
const inquirer = require("inquirer")
const semver = require("semver")

module.exports = {
    menu: function() {
        _menu()
    },
    back: function() {
        _back()
    }
}
    function _menu() {
        Utils.functions.clear()
        console.log(`${Utils.etc.banners.texturant}  Version: v${pkg.version}`)
        console.log(`${"-".repeat(72)}`)
        inquirer.prompt({
            type: "list",
            name: "mainmenu",
            message: "Texturant Main Menu",
            choices: [
                "Order",
                "Check for Updates",
                "My coins",
                "Work",
                "Exit"
            ]
        }).then(m => {
            Utils.functions.clear()
            switch(m.mainmenu) {
                case "Order":
                    inquirer.prompt({
                        type: "list",
                        name: "orderlist",
                        message: "Where would you like to go today?",
                        choices: Utils.etc.orderfrom
                    }).then(e => {
                        try {
                            let texturant = require(`../../texturants/${e.orderlist.toLowerCase().replace("'", "").replace(" ", "")}`)
                            Utils.functions.clear()
                            texturant.run(Utils)
                        } catch (err) {
                            console.error(err)
                        }
                    })
                break;
                case "Check for Updates":
                    console.log("Checking for updates...")
                    require("node-fetch")("https://api.npms.io/v2/search?q=texturant")
                    .then(res => res.json())
                    .then(r => {
                        if(r.code) return console.log("Could not check for information! Try again later.")

                        const version = r.results[0].package.version
                        const myversion = pkg.version

                        if(semver.compare(myversion, version) === -1) {
                            console.log(`Your version of Texturant (${myversion}) is out of date! The latest version is ${version}`)
                        } else {
                            console.log(`Your version of Texturant (${myversion}) is up to date.`)
                        }
                        _back()
                    })
                break;
                case "My coins":
                    console.log(`I have ${Utils.coins.count()} coins.`)
                    _back()
                break;
                case "Work":
                    Utils.coins.earn()
                break;
                case "Exit":
                    console.log("See ya next time!")
                    setTimeout(() => {
                        process.exit()
                    }, 1000)
                break;
            } 
        }) 
    }

function _back() {
    return new (require("inquirer")).prompt({
        name: "back",
        type: "list",
        message: "Back to main menu",
        choices: [
            "Back"
        ]
    }).then(() => {
        _menu()
    })
}