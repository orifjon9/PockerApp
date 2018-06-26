var express = require('express'),
    SortModule = require('./helpers/sort'),

    ruleStraightFlush = require('./rules/straight-flush'),
    ruleFourOfAKind = require('./rules/four-of-kind'),
    ruleHighCard = require('./rules/high-card'),
    ruleFullHouse = require('./rules/full-house'),
    ruleFlush = require('./rules/flush'),
    app = express();

var winner = '';

// 2H 4S 4C 2D 4H 2S 8S AS QS 3S
// 2H 3D 5S 9C KD 2C 3H 4S 8C KH
// 2H 3D 5S 9C KD 2D 3H 5C 9S KH

//var val = '2H 3D 5S 9C KD 2C 3H 4S 8C AH';
//var val = '2H 3H 4H 5H 6H TD TC TS TH QH'; //test Straight flush, win black
//var val = '2H 4S 4C 2D 4H TD TC TS TH QH'; //test Four Of A Kind, win white
//var val = 'TS TS TH 2D 2H 2C 3H 4S 8C AH'; //test FullHouse, win white
//var val = 'KH TH 7H 6H 3H 2C 3H 4S 8C AH'; //test Flush, win black
var val = 'KH TH 7H 6H 3H AC AC AC 8C 8C'; //test Flush, win black
var cards = val.split(' ');

var blackCards = cards.slice().splice(0, 5);
var whiteCards = cards.slice().splice(5);

whiteCards = whiteCards
    .sort(SortModule.bySuit)
    .sort(SortModule.byValue);
blackCards = blackCards
    .sort(SortModule.bySuit)
    .sort(SortModule.byValue);

console.log(blackCards);
console.log(whiteCards);

var rules = [
    ruleStraightFlush,
    ruleFourOfAKind,
    ruleFullHouse,
    ruleFlush,
    ruleHighCard
];

for (let index = 0; index < rules.length; index++) {
    const rule = rules[index];

    var valueOfRule = rule(blackCards, whiteCards);
    if (valueOfRule) {
        winner = valueOfRule === 1 ? 'Black' : 'White'
        console.log(index);
        break;
    }
}


console.log(winner);
// White wins.
// Black wins.
// Black wins.
//Tie