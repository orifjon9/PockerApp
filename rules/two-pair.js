var consts = require('../helpers/const-arrays'),
    ValidationModule = require('../helpers/validations'),
    CountSameValue = require('../helpers/count-values'),
    CompareSameValueByTwoQuantity = require('./compare-same-value-by-two-quantity');

module.exports = (player1Arr, player2Arr) => {
    return CompareSameValueByTwoQuantity(player1Arr, player2Arr, 2, 2);
}