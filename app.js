// var mysql = require('mysql');
var inquirer = require("inquirer");

inquirer.prompt([
    // Here we give the user a list to choose from.
    {
        type: "list",
        message: "Would you like to Post an Item or Bid on an Item?",
        choices: ["Post an Item", "Bid on an Item"],
        name: "select"
    }
]).then(function(user) {
    if (user.select === "Bid on an Item") {
        inquirer.prompt([
            // Here we give the user a list to choose from.
            {
                type: "list",
                message: "What would you like bid on?",
                choices: ["1", "2", "3"],
                name: "products"
            }

        ]).then(function(user) {
            if (user.products) {
                inquirer.prompt([
                    // Here we give the user a list to choose from.
                    {
                        type: "input",
                        message: "How much would you like to bid?",
                        name: "bid"
                    }
                ]).then(function(user) {
                    if (user.bid > existing_bid) {
                        //replace existing bid
                    } else {
                        inquirer.prompt([
                            // Here we give the user a list to choose from.
                            {
                                type: "input",
                                message: "Sorry your bid was too low, please put a higher bid.",
                                name: "bid2"
                            }
                        ]).then(function(user) {
                            if (user.bid2 > existing_bid) {
                                //replace existing bid
                            } 
                        });
                    }
                });
            }

        });
    }
});
