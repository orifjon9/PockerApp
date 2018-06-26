var consts = require('../helpers/const-arrays'),
    CountSameSuit = require('../helpers/count-suits');

module.exports = (player1Arr, player2Arr) => {
    const reqCount = 5;
    var player1CountSameSuit = CountSameSuit(player1Arr);
    var player2CountSameSuit = CountSameSuit(player2Arr);

    // validation for both player have same suit each by 5
    if (player1CountSameSuit === reqCount && player2CountSameSuit === reqCount) {
        return consts.valueSeq.findIndex(f => f === player1Arr[0].charAt(0)) >
            consts.valueSeq.findIndex(f => f === player2Arr[0].charAt(0)) ? 1 : 2;
    }

    if (player1CountSameSuit === reqCount) {
        return 1;
    }
    if (player2CountSameSuit === reqCount) {
        return 2;
    }
    return undefined;
}