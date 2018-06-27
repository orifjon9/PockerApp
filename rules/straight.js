var ValidationModule = require('../helpers/validations');

module.exports = (player1Arr, player2Arr) => ValidationModule.toValueSequence(player1Arr) ? 1 : (ValidationModule.toValueSequence(player2Arr)) ? 2 : undefined;