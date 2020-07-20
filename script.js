const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumbers,
	symbol: getRandomSymbols
}

//charset code #'s from http://www.net-comber.com/charset.html
function getRandomLower() {
  //Random decimal less than 1, times the alphabet(26) rounded down and added to the charset code
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48) 
}

function getRandomSymbols() {
  const specialChar = "!@#$%^&*(){}[]";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


var choices;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength = Number(prompt("How many characters do you want your password to have?"));
    
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
      confirmLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
    }   
    var confirmUpper = confirm("Would you like to use uppercase letters?");
    var confirmLower = confirm("Would you like to use lowercase letters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmSymbols = confirm("Would you like to use special characters?");
    
    while (!confirmUpper && !confirmLower && !confirmNumber && !confirmSymbols) {
      alert("You must select at least one character type!");
      confirmUpper = confirm("Would you like to use uppercase letters?");
      confirmLower = confirm("Would you like to use lowercase letters?");
      confirmNumber = confirm("Would you like to use numbers?");
      confirmSymbols = confirm("Would you like to use special characters?");
    }

  //If Statement covering all selection options
  if (confirmSymbols && confirmNumber && confirmUpper && confirmLower) {
    choices = getRandomSymbols + getRandomNumbers + getRandomLower + getRandomUpper;
  }
  else if (confirmSymbols && confirmNumber && confirmUpper) {
    choices = getRandomSymbols + getRandomNumbers + getRandomUpper;
  }
  else if (confirmSymbols && confirmNumber && confirmLower) {
    choices = getRandomSymbols + getRandomNumbers + getRandomLower;
  }
  else if (confirmSymbols && confirmLower && confirmUpper) {
    choices = getRandomSymbols + getRandomLower + getRandomUpper;
  }
  else if (confirmNumber && confirmLower && confirmUpper) {
    choices = getRandomNumbers + getRandomLower + getRandomUpper;
  }
  else if (confirmSymbols && confirmNumber) {
    choices = getRandomSymbols + getRandomNumbers;
  } 
  else if (confirmSymbols && confirmLower) {
    choices = getRandomSymbols + getRandomLower;
  } 
  else if (confirmSymbols && confirmUpper) {
    choices = getRandomSymbols + getRandomUpper;
  }
   else if (confirmLower && confirmNumber) {
    choices = getRandomLower + getRandomNumbers;
  } 
  else if (confirmLower && confirmUpper) {
    choices = getRandomLower + getRandomUpper;
  } 
  else if (confirmNumber && confirmUpper) {
    choices = getRandomNumbers + getRandomUpper;
  }
  else if (confirmSymbols) {
    choices = getRandomSymbols;
  }
   else if (confirmNumber) {
    choices = getRandomNumbers;
  }
  else if (confirmLower) {
    choices = getRandomLower;
  }

  var password = "";

  for (var i = password.length; i < confirmLength; i++) {
    password += choices[Math.floor(Math.random() * choices.length)];
  }
  return password;
}