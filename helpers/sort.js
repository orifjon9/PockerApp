var consts = require('./const-arrays');

module.exports = {
    byDesc: (item1, item2) => {
        return (indexItem1 < indexItem2) ? 1 : ((indexItem1 > indexItem2) ? -1 : 0);
    },
    bySuit: (item1, item2) => {
        var indexItem1 = consts.suit.findIndex(f => f === item1.charAt(1));
        var indexItem2 = consts.suit.findIndex(f => f === item2.charAt(1));
        return (indexItem1 > indexItem2) ? 1 : ((indexItem1 < indexItem2) ? -1 : 0);
    },
    byValue: (item1, item2) => {
        var indexItem1 = consts.valueSeq.findIndex(f => f === item1.charAt(0));
        var indexItem2 = consts.valueSeq.findIndex(f => f === item2.charAt(0));
        return (indexItem1 < indexItem2) ? 1 : ((indexItem1 > indexItem2) ? -1 : 0);
    }
};