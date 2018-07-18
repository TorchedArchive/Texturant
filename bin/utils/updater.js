const snek = require("snekfetch"),
      packagejson = require("../../package.json"),
      chalk = require("chalk")
let verarr = []

module.exports = {
    versionCheck: function() {
        snek.get("https://texturant-updater.glitch.me/api/version")
        .then((res) => {
            verarr.push(res.its)
        })
        if(`${verarr[0]}` > `${packagejson.version}`) {
            return `${packagejson.version} ${chalk.red("Outdated!")}`
        } else {
            return `${packagejson.version}`
        }
    }
}
