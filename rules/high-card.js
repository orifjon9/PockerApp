var consts = require('../helpers/const-arrays');

module.exports = (player1Arr, player2Arr) => {
    return (
        consts.valueSeq.findIndex(f => f === player1Arr[0].charAt(0)) >
        consts.valueSeq.findIndex(f => f === player2Arr[0].charAt(0))) ? 1 : 2;
}