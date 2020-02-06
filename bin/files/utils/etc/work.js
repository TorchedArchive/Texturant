module.exports = (Utils) => {
    const inquirer = require("inquirer")
    const fs = require("fs")

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
                const data = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`), "utf8")
                const cooldown = 60;
                const time = (Date.now() - data["me"].times.lastWork) / 1000

                if(time < cooldown) {
                    console.log("You are on a cooldown!")
                    Utils.main.back()
                } else {
                    min = 60, max = 120
                    const pay = Math.floor(Math.random() * (max - min) + min)
                    console.log(`You have earned ${pay} coins!`)
                    Utils.coins.work(pay)
                    Utils.main.back()
                }
            break;
        }
    })
}