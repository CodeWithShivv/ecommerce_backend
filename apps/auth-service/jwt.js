"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
// Generate a random string of specified length (e.g., 32 characters)
var generateRandomString = function (length) {
    console.log('Generating random string...');
    var randomString = crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') // Convert to hexadecimal format
        .slice(0, length); // Trim to desired length
    console.log('Random string generated:', randomString);
    return randomString;
};
// Generate a random secret key
var secretKey = generateRandomString(32); // Adjust length as needed
console.log('Generated Secret Key:', secretKey);
