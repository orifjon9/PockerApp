var consts = require('../helpers/const-arrays'),
    CountSameValue = require('../helpers/count-values'),
    CompareSameValueByQuantity = require('./compare-same-value-by-quantity');

module.exports = (player1Arr, player2Arr) => {
    return CompareSameValueByQuantity(player1Arr, player2Arr, 2);
}