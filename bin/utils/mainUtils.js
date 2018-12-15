const fs = require("fs")
const stuff = JSON.parse(fs.readFileSync(__dirname + "/data.json", "utf8"))
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
    },
    say: function(name, speech) {
        return console.log(`${name} > ${speech}`)
    },
    options: [
        "MacDonalds",
        {name: "Burger King", disabled: "Not done yet"},
        "Wendy's",
        {name: "Chick-fill-A", disabled: "Not done yet"}
    ]
}