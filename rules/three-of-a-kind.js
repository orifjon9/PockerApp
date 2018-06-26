var consts = require('../helpers/const-arrays'),
    CountSameValue = require('../helpers/count-values'),
    CompareSameValueByQuantity = require('./compare-same-value-by-quantity');

module.exports = (player1Arr, player2Arr) => {
    return CompareSameValueByQuantity(player1Arr, player2Arr, 3);

    /*const reqCount = 3;
    var player1CountSameValue = CountSameValue(player1Arr);
    var player2CountSameValue = CountSameValue(player2Arr);

    console.log(player1CountSameValue);
    console.log(player2CountSameValue);
    // validation for both player have same value each by 3
    if (player1CountSameValue.first.count === reqCount && player2CountSameValue.first.count === reqCount) {
        return consts.valueSeq.findIndex(f => f === player1CountSameValue.first.suit) >
            consts.valueSeq.findIndex(f => f === player2CountSameValue.first.suit) ? 1 : 2;
    }
    if (player1CountSameValue.first.count === reqCount) {
        return 1;
    }
    if (player2CountSameValue.first.count === reqCount) {
        return 2;
    }
    return undefined;*/
}