exports.run = (Utils) => {
    const inquirer = require("inquirer")
    const selections = Utils.etc.selections.hammys
    inquirer.prompt({
        type: "list",
        name: "hammys_foodcategory",
        message: "Welcome to Hammy's! The best family business in the country. What would you like today?",
        choices: [
            "Combos",
            "Breakfast"
        ]
    }).then(c => {
        switch(c.hammys_foodcategory) {
            case "Combos":
                inquirer.prompt({
                    type: "checkbox",
                    name: "hammys_combos",
                    message: "So you have decided to have a combo? Select which one(s) you would like!",
                    choices: Object.keys(selections.combos)
                }).then(c => {
                    if(c.hammys_combos.length === 0) {
                        console.log("John > Cmon bro, why you gotta waste my time?")
                    } else {
                        const price = Utils.coins.process(selections.combos, c.hammys_combos)
                        
                        if(price > Utils.coins.count()) {
                            console.log("Texturant > Seems as though you don't have enough coins for this.\nGo work a shift to get more coins, and come back later!")
                        } else {
                            Utils.coins.removeCoins(price)
                            console.log("John > Thanks for the purchase!")
                        }
                        /*
                        console.log("John > Getting your stuff delivered bro.")
                        setTimeout(() => {
                            console.log("Texturant > Items have been delivered!")
                        }, 2000) */
                    }
                })
            break;
        }
    })
}