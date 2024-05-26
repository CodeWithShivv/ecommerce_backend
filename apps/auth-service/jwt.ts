import * as crypto from 'crypto';

// Generate a random string of specified length (e.g., 32 characters)
const generateRandomString = (length: number): string => {
  console.log('Generating random string...');
  const randomString = crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal format
    .slice(0, length); // Trim to desired length
  console.log('Random string generated:', randomString);
  return randomString;
};

// Generate a random secret key
const secretKey = generateRandomString(32); // Adjust length as needed
console.log('Generated Secret Key:', secretKey);
