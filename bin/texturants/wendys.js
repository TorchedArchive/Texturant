exports.run = (utils) => {
    const checkbox = require("prompt-checkbox")
    const clear = require("clear")
    const list = require("prompt-list")
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
                    choices: [
                        "Dave's Single",
                        "Dave's Double",
                        "Dave's Triple",
                        "Baconator"
                    ]
                })
                WENDYSCombos.ask((ans) => {
                    console.log(utils.say("Haley", "I'll get your order in a bit.. Go to the next window please."))
                    setTimeout(() => {
                        console.log(utils.say("Haley", "Here you go!"))
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
                            console.log(utils.say("You", choice))
                            switch(choice) {
                                case "Good day, thank you!":
                                    console.log(utils.say("Haley", "You're welcome, good day to you too!"))
                                    break;
                                case "Thanks.":
                                    console.log(utils.say("Haley", "Oh no problem."))
                                    break;
                                case "Okay later":
                                    console.log(utils.say("Haley", "Come back soon."))
                                    break;
                            }
                        })
                    }, 5000)
                })
                break;
            case "Breakfast":
                console.log("All of this is coming soon!\nTexturant Founder and CEO SamuraiStacks")    
                break;
            default:
                break;
        }
    })
}