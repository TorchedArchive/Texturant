module.exports.run = function(Utils) {
    const inquirer = require("inquirer")
    const selections = Utils.etc.selections.mickeybs

    inquirer.prompt({
        type: "list",
        name: "mb_foodcategory",
        message: "Welcome to Mickey B's! Please select what type of food you want!",
        choices: [
            "Breakfast",
            "Burgers"
        ]
    }).then(c => {
        switch(c.mb_foodcategory) {
            case "Breakfast":
                inquirer.prompt({
                    type: "checkbox",
                    name: "mb_breakfast",
                    message: "You have selected the breakfast category! Please select the item(s) you want with *spacebar* and confirm with *enter*.",
                    choices: Object.keys(selections.breakfast)
                }).then(cc => {
                    if (cc.mb_breakfast.length === 0) {
                        console.log("Susan > If you aren't going to order anything, why come here?")
                    } else {
                        const price = Utils.coins.process(selections.breakfast, cc.mb_breakfast)

                        inquirer.prompt({
                            type: "list",
                            name: "purchaseprompt",
                            message: `Are you sure you want to buy this?`,
                            choices: [
                                "Yes",
                                "No"
                            ]
                        }).then(a => {
                            if (a.purchaseprompt === "Yes") {
                                if (price > Utils.coins.count()) {
                                    console.log("Texturant > Seems as though you don't have enough coins for this.\nGo work a shift to get more coins, and come back later!")
                                } else {
                                    Utils.coins.removeCoins(price)
                                    console.log("Susan > Thank you, come again!")
                                }
                            } else {
                                console.log("Texturant > You have decided not to buy. See you later!")
                            }
                        })
                    }
                })
            break;
            case "Burgers":
                console.log("We are currently working on the Burgers menu. Check back in the future.\n\t- sammy, Texturant CEO")
                Utils.main.back()
            break;
        }
    })
}