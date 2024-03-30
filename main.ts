#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 30000;
let myPin = 54321;

let pinAuthorization = await inquirer.prompt(
  [
    {
      name :"pin_check",
      message: "ENTER YOUR PIN",
      type : "number"
    }
  ]
);

  if (pinAuthorization.pin_check === myPin ) {
   let operationAns = await inquirer.prompt(
    [
      {
       name : "operation",
       message:"PLEAS5E SELECT OPTION",
       type : "list",
       choices : ["WITHDRAW","CHECK BALANCE","FAST CASH",],
      }
   ]
);
    
  if (operationAns.operation === "WITHDRAW" ) {   
      let amountAns = await inquirer.prompt(
    [
      {
        name : "amount",
        message : "ENTER YOUR AMOUNT",
        type : "number",
      }
    ]
 );

   if(amountAns.amount <= myBalance && amountAns.amount >=500){
       myBalance -= amountAns.amount;
       console.log(`YOUR REMAINING BALANCE IS: ${myBalance}`);  
   } else {
     console.log("INSUFFICIENT BALANCE!!!");
 }
  } else if (operationAns.operation === "CHECK BALANCE") {
       console.log(`YOUR BALANCE IS: ${myBalance}`);
  } else if (operationAns.operation === "FAST CASH") {
       let fast = await inquirer.prompt(
      [
        {
          name : "cash",
          message : "HOW MUCH CASH YOU NEED",
          type : "list",
          choices : ["500","1000","5000","10000","25000"]
        }
     ]
   );  
      myBalance -= fast.cash;
      console.log(`YOUR WITHDRAWL IS COMPLETE. THANK YOU FOR BANKING WITH US. \n YOUR REMAINING BALANCE IS: ${myBalance}`);
   } 

     } else {
  console.log("INCORRECT PIN CODE!!!");
}
 