const bcrypt = require('bcrypt');

const comparedPassword = (plainPassword,hashPassword) => {
    const compared = bcrypt.compare(plainPassword,hashPassword).then(res => {
        return res;
    })
    return compared;
}

module.exports = comparedPassword;