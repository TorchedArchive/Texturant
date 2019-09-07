const pkg = require("../../../package.json")
const inquirer = require("inquirer")
const Utils = require("./Utils.js")
module.exports = {
    mainMenu: function() {
        inquirer.prompt({
            type: "list",
            name: "mainmenu",
            message: "Texturant Main Menu",
            choices: [
                "Order",
                "Check for Updates",
                "Exit"
            ]
        }).then(a => {
            switch(a.mainmenu) {
                case "Order":
                    inquirer.prompt({
                        type: "list",
                        name: "orderlist",
                        message: "Where would I like to go today?",
                        choices: Utils.etc.orderlist
                    }).then(a => {
                        console.log(a)
                    })
                break;
            }
        })
    }
}
