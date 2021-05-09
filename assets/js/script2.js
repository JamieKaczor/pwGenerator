// Button(Generate Password) is clicked event
document.querySelector("#generate").addEventListener("click", writePassword);
// Global Variables

// Arrays
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable choices
var confirmLength = "";
var confirmNumericCharacter;
var confirmSpecialCharacter;
var confirmUpperCase;
var confirmLowerCase;

// User character choices
var userChoices = [];

// Generation of password begins
function generatePassword() {
  var randomPassword = "";
  // password generation logic goes here
  confirmLength = parseInt(prompt("How many characters would you like your password to be?"))
  while (confirmLength < 8 || confirmLength > 128) {
    confirmLength = parseInt(alert("Pick between 8-128 characters please."))
  }
  // Selection of characters used or ignored
  confirmNumericCharacter = confirm("Click OK if you'd like to include numbers.");
  confirmSpecialCharacter = confirm("Click OK if you'd like to include special characters.");
  confirmUpperCase = confirm("Click OK if you'd like to include uppercase letters.");
  confirmLowerCase = confirm("Click OK if you'd like to include lowercase letters.");
  // Logic that begins to hurt my head if the user is being difficult
  if(confirmSpecialCharacter === false && confirmSpecialCharacter === false && confirmUpperCase === false && confirmLowerCase === false) {
    prompt("You must click OK to at least one choice!");
    confirmNumericCharacter = confirm("Click OK if you'd like to include numbers.");
    confirmSpecialCharacter = confirm("Click OK if you'd like to include special characters.");
    confirmUpperCase = confirm("Click OK if you'd like to include uppercase letters.");
    confirmLowerCase = confirm("Click OK if you'd like to include lowercase letters.");
  }
  
  userChoices = []
  // Use concat method so we're not deleting arrays based on user choices about character selection
  if (confirmSpecialCharacter) {
    userChoices = userChoices.concat(numberArray)
  }
  
  if (confirmSpecialCharacter) {
    userChoices = userChoices.concat(specialChars)
  }
  
  if (confirmUpperCase) {
    userChoices = userChoices.concat(upperCase)
  }

  if (confirmLowerCase) {
    userChoices = userChoices.concat(lowerCase)
  }
  
    console.log(userChoices)

    randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + userChoices[Math.floor(Math.random() * userChoices.length)];
      console.log(randomPassword)
    }
  return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



