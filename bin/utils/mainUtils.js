const fs = require("fs")
const stuff = JSON.parse(fs.readFileSync("./bin/utils/data.json", "utf8"))
module.exports = {
    myCoins: function() {
        if(!stuff["me"]) {
            stuff["me"] = {
                items: {
                    coins: 0
                }
            }
            fs.writeFile("./bin/utils/data.json", JSON.stringify(stuff), (err) => {
                if(err) return console.log(err + "\nReport this bug on https://github.com/SamuraiStacks/Texturant")
            })
        }
        return stuff["me"].items.coins;
    }
}