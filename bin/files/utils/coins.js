const fs = require("fs")
const Utils = require("./Utils.js")
module.exports = {
    init: function() {
        if(!fs.existsSync(`${__dirname}/data.json`)) {
            let stuff = {}
            stuff["me"] = {
                items: {
                    coins: 0
                },
                times: {
                    lastWork: 0,
                    lastDaily: 0
                }
            }
            fs.writeFile("./bin/files/utils/data.json", JSON.stringify(stuff), (err) => {
                if(err) return console.log(`\n\n${err}\nReport this bug on https://github.com/SamuraiStacks/Texturant`)
            })
        } else {
            return "A data file already exists!"
        }
    },
    count: function() {
        const stuff = JSON.parse(fs.readFileSync(`${__dirname}/data.json`), "utf8")
        return stuff["me"].items.coins;
    },
    earn: function() {
        require("./etc/work.js")(Utils)
    },
    work: function(pay) {
        let stuff = JSON.parse(fs.readFileSync(`${__dirname}/data.json`), "utf8")
        stuff["me"] = {
            items: {
                coins: stuff["me"].items.coins + pay
            },
            times: {
                lastWork: Date.now()
            }
        }
        fs.writeFile("./bin/files/utils/data.json", JSON.stringify(stuff), (err) => {
            if(err) return console.log(`\n\n${err}\nReport this bug on https://github.com/SamuraiStacks/Texturant`)
        })
        return;
    },
    addCoins: function(num) {
        let stuff = JSON.parse(fs.readFileSync(`${__dirname}/data.json`), "utf8")
        stuff["me"] = {
            items: {
                coins: stuff["me"].items.coins + num
            }
        }
        fs.writeFile("./bin/files/utils/data.json", JSON.stringify(stuff), (err) => {
            if(err) return console.log(`\n\n${err}\nReport this bug on https://github.com/SamuraiStacks/Texturant`)
        })
        return;
    },
    removeCoins: function(num) {
        let stuff = JSON.parse(fs.readFileSync(`${__dirname}/data.json`), "utf8")
        stuff["me"] = {
            items: {
                coins: stuff["me"].items.coins - num
            }
        }
        fs.writeFile("./bin/files/utils/data.json", JSON.stringify(stuff), (err) => {
            if(err) return console.log(`\n\n${err}\nReport this bug on https://github.com/SamuraiStacks/Texturant`)
        })
        return;
    },
    process: function(selection, items) {
        let total = 0
        for(const i of items) {
            console.log(`${i}: ${selection[i]} coins`)
            total = total + selection[i]
        }
        console.log(`\nTotal: ${total} coins!`);
        return total;
    }
}