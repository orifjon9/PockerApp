var ValidationModule = require('../helpers/validations'),
    CountSameSuit = require('../helpers/count-max-suits');

module.exports = (player1Arr, player2Arr) => {
    const reqCount = 5;
    var player1CountSameSuit = CountSameSuit(player1Arr);
    var player2CountSameSuit = CountSameSuit(player2Arr);

    // validation for both player have same suit each by 5
    if (player1CountSameSuit === reqCount && player2CountSameSuit === reqCount) {
        return ValidationModule.toValueSequence(player1Arr) ? 1 :
            (ValidationModule.toValueSequence(player2Arr)) ? 2 : undefined;
    }

    if (player1CountSameSuit === reqCount && ValidationModule.toValueSequence(player1Arr)) {
        return 1;
    }
    if (player2CountSameSuit === reqCount && ValidationModule.toValueSequence(player2Arr)) {
        return 2;
    }
    return undefined;
}