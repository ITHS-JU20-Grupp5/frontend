const bcrypt = require('bcrypt');

/**
 * Takes in a password string and hashes it with 10 salt rounds
 * @param {string} password The password to hash
 * @returns The hashed password
 */
module.exports.hash = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

/**
 * Takes in a user entered password and a hashed password and compares the them
 * @param {string} password The user entered password
 * @param {string} hashedPassword The hashed password stored in the database
 * @returns If the two passwords are the same
 */
module.exports.verify = async function(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}