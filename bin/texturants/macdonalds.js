exports.run = (list) => {
const checkbox = require("prompt-checkbox")
const clear = require("clear")
    clear()
    const MacDonalds = new list({
        name: "macdonalds",
        message: "Welcome to MacDonalds! Select what category of food you want please!",
        choices: [
            "Breakfast",
            "Burgers"
        ]
    });
    MacDonalds.ask(function(ans) {
        switch (ans) {
            case "Breakfast":
                let MCDBreakfast = new checkbox({
                    name: "macdonalds_breakfast",
                    message: "You have selected the Breakfast category! Please select which item(s) you would like with *spacebar* and confirm with *Enter*.",
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
                })
                MCDBreakfast.ask(function(ans) {
                    console.log(`Susan > I will get you your ${ans.length > 1 ? `${ans.slice(0, ans.length - 1).join(", ")} and ${ans.slice(-1).pop()}` : ans.join(", ")}. Pull-up to the next window`)
                    setTimeout(() => {
                        console.log("Susan > Here is your order!")
                            let speech = new list({
                                name: "speech",
                                message: "(What should I say?)",
                                choices: [
                                    "Thanks! Have a nice day!",
                                    "Yeah whatever..",
                                    "Okay bye."
                                ]
                            })
                            speech.ask(function(ans) {
                                console.log(`You > ${ans}`)
                                switch (ans) {
                                    case "Thanks! Have a nice day!":
                                        console.log("Susan > You too! Come again!")
                                        break;
                                    case "Yeah whatever..":
                                        console.log("Susan > Bye.")
                                        break;
                                    case "Okay bye.":
                                        console.log("Susan > Later...")
                                        break;
                                    default:
                                        break;
                                }
                            })
                    }, 5000);
                })
                break;
            case "Burgers":
                console.log("We do not have any burgers at the moment! Sorry for any inconvenience!\nTexturant CEO and Founder\n~ SamuraiStacks")
                break;
            default:
                break;
        }
    });
}