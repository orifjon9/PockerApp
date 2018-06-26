var consts = require('./const-arrays');

module.exports = (arr) => {
    var valueArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        valueArr[consts.valueSeq.findIndex(f => f === arr[i].charAt(0))] += 1;
    }
    var first = {
        suit: consts.valueSeq[valueArr.length - 1],
        count: valueArr[valueArr.length - 1]
    };
    var second = {
        suit: '',
        count: -1
    };

    for (let j = valueArr.length - 2; j >= 0; j--) {
        const element = valueArr[j];
        if (element > first.count) {
            var tmp = { v1: first.suit, v2: first.count };

            first.count = element;
            first.suit = consts.valueSeq[j];

            second.suit = tmp.v1;
            second.count = tmp.v2;
        } else if (element > second.count) {
            second.count = element;
            second.suit = consts.valueSeq[j];
        }
    }
    return { first: first, second: second };
}