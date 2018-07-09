#! /usr/bin/env node
const list = require("prompt-list")
const orderFrom = new list({
    name: "orderFrom",
    message: "Where would I like to go today?",
    choices: [
        "MacDonalds",
        {name: "Burger King", disabled: "Not done yet"},
        {name: "Wendy's", disabled: "Not done yet"},
        {name: "Chick-fill-A", disabled: "Not done yet"}
    ]
})

orderFrom.ask(function(choice) {
    try {
        let theTexturant = require(`./texturants/${choice.toLowerCase()}.js`)
        theTexturant.run(list)
    } catch (err) {
        console.log(err)
    }
})