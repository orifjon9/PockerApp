var consts = require('../helpers/const-arrays'),
    ValidationModule = require('../helpers/validations');

module.exports = (player1Arr, player2Arr) => {
    return ValidationModule.toValueSequence(player1Arr) ? 1 :
        (ValidationModule.toValueSequence(player2Arr)) ? 2 : undefined;
}