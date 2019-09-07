const Utils = require("./Utils.js")
const pkg = require("../../../package.json")
const inquirer = require("inquirer")
module.exports = {
    menu: function() {
        _menu()
    }
}
    function _menu() {
        Utils.functions.clear()
        console.log(`${Utils.etc.banners.texturant} Version: v${pkg.version}`)
        console.log(`\t\t\t\t\t  ${"-".repeat(72)}`)
        inquirer.prompt({
            type: "list",
            name: "mainmenu",
            message: "Texturant Main Menu",
            choices: [
                "Order",
                "Check for Updates",
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
            } 
        }) 
    }
