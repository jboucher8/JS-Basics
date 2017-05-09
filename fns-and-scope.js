//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	return true;
}
isTyler();

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var name = prompt("Enter your name:", "");

function getName(name) {
	return name;
 }

document.write(getName(name));

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	alert(getName("Welcome " + name + "!"));
} 
welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here --- 

  An argument is passed when calling a function and parameter is a function declaration.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here --- 
Falsy values are:
  	false
  	0
  	" " empty string
  	null
  	undefined
  	NaN (not a number)

You can use the !== to check for falsy values.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
  	return "Jesse";
  }
  
document.write(myName());

//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName("Jesse");

//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(myName) {
	return function() {
		return "Jesse";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();



