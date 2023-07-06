const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,  // Set the desired length of the password
    numbers: true,  // Include numbers in the password
    symbols: true,  // Include symbols in the password
  });

  console.log('Generated Password:', password);
}

generateRandomPassword();
