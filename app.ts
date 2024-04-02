

import inquirer from "inquirer"

import chalk from "chalk"

let myBalance = 10000;

let myPin : number = 3179

let pinAnswer  =  await inquirer.prompt(
    [
        {
           name : "pin",
           message : "Enter your pin",
           type : "number"
        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log("correct pin code")

    let oprationAns = await inquirer.prompt(
        [
            {
                name: "opration",
                type: "list",
                message : "select one option",
                choices : ["withdraw", "check balance"],   
            }
        ]
    );
    console.log(oprationAns);

    if (oprationAns.opration === "withdraw"){
          let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    type :"number",
                    message: "Enter your amount",

                }
            ]
          );

          myBalance -= amountAns.amount;
          console.log("your remaining balance is:" + myBalance);

    } else if (oprationAns.opration === "check balance"){
        console.log (`"your balance is" ${myBalance}`);
    }
} else{
    console.log("incorrect pin number");
}
    