var express = require('express'),
    fs = require('fs'),
    SortModule = require('./helpers/sort'),
    consts = require('./helpers/const-arrays'),

    ruleStraightFlush = require('./rules/straight-flush'),
    ruleFourOfAKind = require('./rules/four-of-kind'),
    ruleHighCard = require('./rules/high-card'),
    ruleFullHouse = require('./rules/full-house'),
    ruleFlush = require('./rules/flush'),
    ruleStraight = require('./rules/straight'),
    ruleThreeOfAKind = require('./rules/three-of-a-kind'),
    ruleTwoPair = require('./rules/two-pair'),
    ruleOnePair = require('./rules/one-pair'),
    app = express();

if (process.argv.length > 2) {
    var filePath = process.argv[2];
    console.log('Info: ' + filePath);
    console.log('Started reading file...');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('File was read successfully');
        var lines = data.split(/\r?\n/);
        var results = '';
        var rules = [
            ruleStraightFlush,
            ruleFourOfAKind,
            ruleFullHouse,
            ruleFlush,
            ruleStraight,
            ruleThreeOfAKind,
            ruleTwoPair,
            ruleOnePair,
            ruleHighCard
        ];

        for (let i = 0; i < lines.length; i++) {
            const cards = lines[i].split(' ');
            if (cards.length !== 10) {
                continue;
            }
            var winner = '';

            var blackCards = cards.slice().splice(0, 5);
            var whiteCards = cards.slice().splice(5);

            whiteCards = whiteCards
                .sort(SortModule.bySuit)
                .sort(SortModule.byValue);
            blackCards = blackCards
                .sort(SortModule.bySuit)
                .sort(SortModule.byValue);

            for (let index = 0; index < rules.length; index++) {
                const rule = rules[index];
                var valueOfRule = rule(blackCards, whiteCards);
                if (valueOfRule || valueOfRule === 0) {
                    winner = consts.result[valueOfRule];
                    break;
                }
            }
            results += winner + '\n';
        }
        console.log(results);
        fs.writeFile('sampleoutput.txt', results, (err) => {
            if (!err) {
                console.log('The results were written successfully');
                console.log('Please, open sampleoutput.txt file near by project')
            }
        });
    });
} else {
    console.log('Please put input file path')
}