exports.run = (Utils) => {
    const inquirer = require("inquirer")
    inquirer.prompt({
        type: "list",
        name: "hammys_foodcategory",
        message: "Welcome to Hammy's! The best family business in the country. What would you like today?",
        choices: [
            ""
        ]
    })
}