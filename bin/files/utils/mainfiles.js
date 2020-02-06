const Utils = require("./Utils.js")
const pkg = require("../../../package.json")
const inquirer = require("inquirer")
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
                "Exit",
                "Test"
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
                case "My coins":
                    console.log(`I have ${Utils.coins.count()} coins.`)
                    _back()
                break;
                case "Work":
                    Utils.coins.earn()
                break;
                case "Test":
                    // console.log(Utils.etc.selections.hammys.combos)
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