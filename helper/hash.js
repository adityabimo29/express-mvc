const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const encryptPassword = bcrypt.hash(password,10).then(salt => {
        return salt;
        
    });
    return encryptPassword;
}

module.exports = hashPassword;