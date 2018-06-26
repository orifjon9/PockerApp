var consts = require('../helpers/const-arrays');

module.exports = (player1Arr, player2Arr) => {
    var index1 = consts.valueSeq.findIndex(f => f === player1Arr[0].charAt(0));
    var index2 = consts.valueSeq.findIndex(f => f === player2Arr[0].charAt(0));
    return (index1 > index2 ? 1 : (index1 < index2 ? 2 : 0));
}