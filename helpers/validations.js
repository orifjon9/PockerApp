var consts = require('./const-arrays');

module.exports = {
    toValueSequence: arr => {
        var lastIndex = consts.valueSeq.findIndex(f => f === arr[0].charAt(0));
        var currentIndex = -1;
        for (let index = 1; index < arr.length; index++) {
            currentIndex = consts.valueSeq.findIndex(f => f === arr[index].charAt(0));
            if (lastIndex === (currentIndex + 1)) {
                lastIndex = currentIndex;
            } else {
                return false;
            }
        }
        return true;
    }
}