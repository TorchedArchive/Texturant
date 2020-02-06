const fs = require("fs")
module.exports = {
    count: function() {
        let stuff = {}
        if(!fs.existsSync(`${__dirname}/data.json`)) {
            stuff["me"] = {
                items: {
                    coins: 0
                }
            }
            fs.writeFile("./bin/files/utils/data.json", JSON.stringify(stuff), (err) => {
                if(err) return console.log(`\n\n${err}\nReport this bug on https://github.com/SamuraiStacks/Texturant`)
            })
        } else {
            stuff = JSON.parse(fs.readFileSync(`${__dirname}/data.json`), "utf8")
        }
        return stuff["me"].items.coins;
    }
}