module.exports.run = function(Utils) {
    const inquirer = require("inquirer")
    inquirer.prompt({
        type: "list",
        name: "mb_foodcategory",
        message: "Welcome to Mickey B's! Please select what type of food you want!",
        choices: [
            "Breakfast",
            "Burgers"
        ]
    }).then(c => {
        if(c.mb_foodcategory === "Breakfast") {
            inquirer.prompt({
                type: "checkbox",
                name: "mb_breakfast",
                message: "You have selected the breakfast category! Please select the item(s) you want with *spacebar* and confirm with *enter*.",
                choices: [
                    "Fruit and Maple Oatmeal",
                    "Fruit N' Yogurt Parfait",
                    "Egg McMuffin",
                    "Egg White Delight McMuffin",
                    "Sausage McMuffin", 
                    "Sausage McMufin With Egg",
                    "Bacon, Egg and Cheese Biscuit",
                    "Sausage Biscuit",
                    "Sausage Biscuit with Egg",
                    "Steak, Egg and Cheese Biscuit"
                ]
            }).then(cc => {
                if(cc.mb_breakfast.length === 0) {
                    console.log("Susan > If you aren't going to order anything, why come here?")
                } else {
                    console.log(`${cc.mb_breakfast.length > 1 ? `${cc.mb_breakfast.slice(0, cc.mb_breakfast.length - 1).join(", ")} and ${cc.mb_breakfast.slice(-1).pop()}` : cc.mb_breakfast.join(", ")}`)
                    setTimeout(() => {
                        console.log("success!")
                    }, 5000)
                }
            })
        }
    })
}
