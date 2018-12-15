exports.run = (Utils) => {
    const checkbox = require("prompt-checkbox")
    const clear = require("clear")
    const list = require("prompt-list")
    const selection = require("../utils/selection/wendys.json")
    clear()
    const Wendys = new list({
        name: "wendy's",
        message: "Hey there, welcome to Wendy's! Select the category of food you would like today!",
        choices: [
            "Combos",
            "Breakfast"
        ]
    })
    Wendys.ask((ans) => {
        switch(ans) {
            case "Combos":
                WENDYSCombos = new checkbox({
                    name: "wendys_combos",
                    message: "You selected the Combos category. Select item(s) you would like with *spacebar* and confirm with *Enter*.",
                    choices: selection.combos
                })
                WENDYSCombos.ask(() => {
                    console.log(Utils.main.say("Haley", "I'll get your order in a bit.. Go to the next window please."))
                    setTimeout(() => {
                        console.log(Utils.main.say("Haley", "Here you go!"))
                        const speech = new list({
                            name: "speech",
                            message: "What to say to her?",
                            choices: [
                                "Good day, thank you!",
                                "Thanks.",
                                "Okay later.."
                            ]
                        })
                        speech.ask((choice) => {
                            console.log(Utils.main.say("You", choice))
                            switch(choice) {
                                case "Good day, thank you!":
                                    console.log(Utils.main.say("Haley", "You're welcome, good day to you too!"))
                                    break;
                                case "Thanks.":
                                    console.log(Utils.main.say("Haley", "Oh no problem."))
                                    break;
                                case "Okay later..":
                                    console.log(Utils.main.say("Haley", "Come back soon."))
                                    break;
                            }
                        })
                    }, 5000)
                })
                break;
            case "Breakfast":
            WENDYSBreakfirst = new checkbox({
                name: "wendys_breakfirst",
                message: "Looks like you want some breakfirst items to eat. Move with your arrow keys, select with spacebar and confirm with enter.",
                choices: selection.breakfast
            })
            WENDYSBreakfirst.ask(() => {
                console.log(Utils.main.say("Haley", "Please be patient.. I'll prep your order soon."))
                setTimeout(() => {
                    console.log(Utils.main.say("Haley", "There you are!"))
                    const speech = new list({
                        name: "speech",
                        message: "What to say to her?",
                        choices: [
                            "Good day, thank you!",
                            "Thanks.",
                            "Okay later.."
                        ]
                    })
                    speech.ask((choice) => {
                        console.log(Utils.main.say("You", choice))
                        switch(choice) {
                            case "Good day, thank you!":
                                console.log(Utils.main.say("Haley", "You're welcome, good day to you too!"))
                                break;
                            case "Thanks.":
                                console.log(Utils.main.say("Haley", "Oh no problem."))
                                break;
                            case "Okay later..":
                                console.log(Utils.main.say("Haley", "Come back soon."))
                                break;
                        }
                    })
                }, 5000)
            })
            break;
        default:
            break;
        }
    })
}