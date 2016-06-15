function group_statistics(betters: Better[], correct_scores: number[][]) {
    var played_games = 0
    for (var i = 0; i < correct_scores.length; ++i) {
        if (correct_scores[i].length != 0) played_games++
    }

    var res = Array<Array<number>>(played_games)

    for (var i = 0; i < played_games; ++i) {
        var fully_correct = 0
        var partially_correct = 0

        var correct_hs = correct_scores[i][0];
        var correct_as = correct_scores[i][1];

        for (var j = 0; j < betters.length; ++j) {
            var betted_hs = betters[j].score_bets[i][0];
            var betted_as = betters[j].score_bets[i][1];

            if (correct_hs == betted_hs && correct_as == betted_as) {
                ++fully_correct
                ++partially_correct
            } else if (correct_hs == correct_as && betted_hs == betted_as) ++partially_correct
            else if (correct_hs > correct_as && betted_hs > betted_as) ++partially_correct
            else if (correct_hs < correct_as && betted_hs < betted_as) ++partially_correct
        }

        res[i] = [fully_correct, partially_correct]
    }

    return res;
}