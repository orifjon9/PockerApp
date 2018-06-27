var SortModule = require('./sort');

module.exports = (str) => {
    const cards = str.split(' ');
    if (cards.length !== 10) {
        return undefined;
    }
    var blackCards = cards.slice().splice(0, 5);
    var whiteCards = cards.slice().splice(5);

    whiteCards = whiteCards
        .sort(SortModule.bySuit)
        .sort(SortModule.byValue);
    blackCards = blackCards
        .sort(SortModule.bySuit)
        .sort(SortModule.byValue);

    return { player1: blackCards, player2: whiteCards };
};