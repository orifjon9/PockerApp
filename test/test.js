var expect = require('chai').expect,
    separateCardModule = require('../helpers/separate-cards'),

    ruleStraightFlush = require('../rules/straight-flush'),
    ruleFourOfAKind = require('../rules/four-of-kind'),
    ruleHighCard = require('../rules/high-card'),
    ruleFullHouse = require('../rules/full-house'),
    ruleFlush = require('../rules/flush'),
    ruleStraight = require('../rules/straight'),
    ruleThreeOfAKind = require('../rules/three-of-a-kind'),
    ruleTwoPair = require('../rules/two-pair'),
    ruleOnePair = require('../rules/one-pair');


describe('Picker App Test', () => {
    it('should be created', () => {
        expect(true).to.be.equal(true);
    });

    it('should be Black player win on using "Straight flush" rule', () => {
        var cards = separateCardModule('2H 3H 4H 5H 6H TD TC TS TH QH');
        expect(ruleStraightFlush(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "Straight flush" rule', () => {
        var cards = separateCardModule('2H 3H 4H 5H 7H AD KD QD JD TD');
        expect(ruleStraightFlush(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be Black player win on using "Four Of A Kind" rule', () => {
        var cards = separateCardModule('2H 4S 4C 2D 4H TD TC TS TH QH');
        expect(ruleFourOfAKind(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be White player win on using "Four Of A Kind" rule', () => {
        var cards = separateCardModule('AH AS AC AD 4H TD TC TS TH QH');
        expect(ruleFourOfAKind(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "Full House" rule', () => {
        var cards = separateCardModule('TS TS AH 2D 2H AC AH AS 8C 8H');
        expect(ruleFullHouse(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be Black player win on using "Full House" rule', () => {
        var cards = separateCardModule('AC AH AS 8C 8H TS TS AH 2D 2H');
        expect(ruleFullHouse(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be Black player win on using "Flush" rule', () => {
        var cards = separateCardModule('KH TH 7H 6H 3H 2C 3H 4S 8C AH');
        expect(ruleFlush(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "Flush" rule', () => {
        var cards = separateCardModule('KH TH 7H 6H 3H AC KC AC 7C 8C');
        expect(ruleFlush(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be Black player win on using "Straight" rule', () => {
        var cards = separateCardModule('3H 4S 5C 6D 7H AH TC AC 2C 4C');
        expect(ruleStraight(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "Straight" rule', () => {
        var cards = separateCardModule('3H 4S 5C 6D 8H AH KC QC JC TC');
        expect(ruleStraight(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be White player win on using "Three Of A Kind" rule', () => {
        var cards = separateCardModule('2H 4S 4C 2D 5H TD KC TS TH QH');
        expect(ruleThreeOfAKind(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be Black player win on using "Three Of A Kind" rule', () => {
        var cards = separateCardModule('TH TS 4C TD 5H TD 9C 9S 9H QH');
        expect(ruleThreeOfAKind(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be Black player win on using "Two pair" rule', () => {
        var cards = separateCardModule('TH TS 4C 4D 5H TD 8C 2S 9H QH');
        expect(ruleTwoPair(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "Two pair" rule', () => {
        var cards = separateCardModule('TH TS 4C 4D 5H AD AC 5S 5H QH');
        expect(ruleTwoPair(cards.player1, cards.player2))
            .to.be.equal(2);
    });

    it('should be Black player win on using "One pair" rule', () => {
        var cards = separateCardModule('TH TS 4C 6D 5H AD KC 5S 6H QH');
        expect(ruleOnePair(cards.player1, cards.player2))
            .to.be.equal(1);
    });

    it('should be White player win on using "One pair" rule', () => {
        var cards = separateCardModule('TH QS 4C 6D 5H AD KC KS 6H QH');
        expect(ruleOnePair(cards.player1, cards.player2))
            .to.be.equal(2);
    });
});