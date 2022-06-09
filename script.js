// Generate password according to criteria
function generatePassword() {

  // Prompt the user for the password criteria
  var passwordLength   = getPasswordLength();
  var includeLowercase = getYesOrNo("Include lowercase letter?");
  var includeUppercase = getYesOrNo("Include uppercase letter?");
  var includeNumeric   = getYesOrNo("Include numeric characters?");
  var includeSpecial   = getYesOrNo("Include special characters?");

  // list of valid symbols according to criteria
  var characters = [];

  if (includeLowercase) {
    characters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }

  if (includeUppercase) {
    characters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                       'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }

  if (includeNumeric) {
    characters.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }

  if (includeSpecial) {
    characters.push(' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',',
                    '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']',
                    '^', '_', '`', '{', '|', '}', '~');
  }

  // Gives a random character from valid symbols
  var randomChar = function() {
    var i = Math.floor(Math.random() * characters.length);
    return characters[i];
  }

  // Array of characters in the resulting password
  var passwordCharacters = [];

  while (passwordCharacters.length < passwordLength) {
    passwordCharacters.push(randomChar());
  }

  return passwordCharacters.join('');
}

// Prompt the user for a valid password length
function getPasswordLength() {
  do {
    var l = parseInt(prompt("How long will your password be? (Passwords must be 8-128 characters long)"));

    if (!isNaN(l) && 8 <= l && l <= 128) {
      return l;
    }

    alert("Invalid input! Please enter a number between 8 and 128");
  }
  while (true);
}

// Prompt the user with a message requiring a Y for yes (true) and N for no (false)
function getYesOrNo(message) {
  do {
    a = prompt(message + " (y/n)");

    switch (a) {
      case 'y':
      case 'Y': return true;
      case 'n':
      case 'N': return false;
    }

    alert("Invalid input! Please enter a Y for yes or a N for no");
  }
  while (true);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
