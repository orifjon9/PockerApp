var consts = require('./const-arrays');

module.exports = arr => {
    var suitArr = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        suitArr[consts.suit.findIndex(f => f === arr[i].charAt(1))] += 1;
    }
    return suitArr.sort(suitArr)[suitArr.length - 1];
};