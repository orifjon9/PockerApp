var consts = require('../helpers/const-arrays');

module.exports = (player1Arr, player2Arr) => {
    var index = 0;
    while (index < player1Arr.length) {
        var index1 = consts.valueSeq.findIndex(f => f === player1Arr[index].charAt(0));
        var index2 = consts.valueSeq.findIndex(f => f === player2Arr[index].charAt(0));
        index++;
        var result = (index1 > index2 ? 1 : (index1 < index2 ? 2 : 0));
        if (result !== 0) {
            return result;
        }
    }
    return 0;
}