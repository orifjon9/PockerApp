var fs = require('fs'),
    consts = require('./helpers/const-arrays'),
    separateCardModule = require('./helpers/separate-cards'),

    ruleStraightFlush = require('./rules/straight-flush'),
    ruleFourOfAKind = require('./rules/four-of-kind'),
    ruleHighCard = require('./rules/high-card'),
    ruleFullHouse = require('./rules/full-house'),
    ruleFlush = require('./rules/flush'),
    ruleStraight = require('./rules/straight'),
    ruleThreeOfAKind = require('./rules/three-of-a-kind'),
    ruleTwoPair = require('./rules/two-pair'),
    ruleOnePair = require('./rules/one-pair');

console.log('==============================================');

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
            var winner = '';
            var cards = separateCardModule(lines[i]);
            if (!cards) {
                continue;
            }
            for (let index = 0; index < rules.length; index++) {
                const rule = rules[index];
                var valueOfRule = rule(cards.player1, cards.player2);
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
                console.log('Please, open sampleoutput.txt file near by project');
                console.log('==============================================');
            }
        });
    });
} else {
    console.log('Please put input file path');
}