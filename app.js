// To complete this project, you’ll need to use loops, conditionals and 
// the module operator. 


var list = 
document.getElementById("list"); //gets ul ("list") from DOM

var i;// the number that constitutes the <li> 

for (var i = 1; i < 101; i++) { // for loop counts to 100
	
	if ((i % 3 == 0) && (i % 5 == 0)) {
		document.write('fizzbuzz');//condition: if both i/3 = 0 and i/5 = 0, return 'fizzbuzz'
	}
	
	else if (i % 3 == 0) {
		document.write('fizz'); // condition: if i/3 = 0, then return 'fizz' 
	}

	else if (i % 5 == 0) {
		document.write('buzz');//condition: if i/5 = 0, then return 'buzz' 
	}

	else {document.write(i);//if none of the conditions are met, return the integer
		}

};//end for function

