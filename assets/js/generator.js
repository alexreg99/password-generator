// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNum = Math.floor(Math.random() * 4);
function numGenerator() {
  return Math.floor(Math.random() * 4);
}
// Write password to the #password input
function generatePassword(
  length,
  lowercase,
  uppercase,
  numeric,
  specialCharacters
) {
  var passwordGenerated = "";
  for (var i = 0; i < length; i++) {
    var randomNum = numGenerator();
    switch (randomNum) {
      case 0:
        if (!lowercase) {
          numGenerator();
        } else {
          passwordGenerated += getRandomLower();
        }
        break;
      case 1:
        if (!uppercase) {
          numGenerator();
        } else {
          passwordGenerated += getRandomUpper();
        }

        break;
      case 2:
        if (!numeric) {
          numGenerator();
        } else {
          passwordGenerated += getRandomNumber();
        }

        break;
      case 3:
        if (!specialCharacters) {
          numGenerator();
        } else {
          passwordGenerated += getRandomSymbol();
        }

        break;
    }
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  return passwordGenerated;
}

function writePassword() {
  var length = 0;
  while (length < 8 || length > 128) {
    var length = prompt("Please enter a number between 8 and 128.");
  }
  var lowercase = confirm("would you like to use lowercase?");

  var uppercase = confirm("would you like to use uppercase?");

  var numeric = confirm("would you like to use numeric values?");

  var specialCharacters = confirm("would you like to use special characters?");

  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert("you must answer ok to at least one question.");
    writePassword();
  }

  var password = generatePassword(
    length,
    lowercase,
    uppercase,
    numeric,
    specialCharacters
  );

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
