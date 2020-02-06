module.exports = (Utils) => {
    const inquirer = require("inquirer")

    inquirer.prompt({
        type: "list",
        name: "workoptions",
        message: "What would you like to do at your work?",
        choices: [
            "Work a Shift",
            "Ask for Promotion"
        ]
    }).then(a => {
        switch(a.workoptions) {
            case "Work a Shift":
                min = 60, max = 120
                const pay = Math.floor(Math.random() * (max - min) + min)
                console.log(`You have earned ${pay} coins!`)
                Utils.coins.addCoins(pay)
                Utils.main.back()
            break;
        }
    })
}