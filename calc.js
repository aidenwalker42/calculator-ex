const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' '); //allows for splitting
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// mathSymbol = "+"
	// num1 = 3
	// num2 = 4

	console.log("Operand: ",mathSymbol); //prints out the text "Operand: " and the variable mathSymbol.
	console.log("First Number ",num1);
	console.log("Second Number ",num2);

	if(mathSymbol === "add")
	{
		console.log(num1 + "+" + num2 + "=" + parseFloat(num1+num2)); //
	}
	if(mathSymbol=== "sub")
	{
		console.log(num1 + "+" + num2 + "=" + parseFloat(num1-num2));
	}
	if(mathSymbol=== "div")
	{
		console.log(num1 + "/" + num2 + "=" + parseFloat(num1/num2));
	}
	if(mathSymbol=== "multi")
	{
		console.log(num1 + "*" + num2 + "=" + parseFloat(num1*num2));
	}
	if(mathSymbol=== "root")
	{
		console.log("Square root = " + Math.sqrt(parseFloat(num1*num2)));
	}




	// This line closes the connection to the command line interface.
	reader.close()

});
