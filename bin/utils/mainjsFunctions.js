const functions = {
    goBack: function() {
        return new (require("prompt-list"))({
            message: "Back to main menu",
            choices: [
                "Back"
            ]
        }).ask(() => {
            mainMenu()
        })
    }
}

module.exports = functions;