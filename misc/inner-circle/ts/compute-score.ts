var current_results = [
  [2, 1], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [2, 1], // #3 Wales - Slovakia
  [1, 1], // #4 England - Russia
  [0, 1], // #5 Turkey - Croatia
  [1, 0], // #6 Poland - Northern Ireland
  [2, 0], // #7 Germany - Ukraine
  [1, 0], // #8 Spain - Czech Republic
  [1, 1], // #9 Ireland - Sweden
  [0, 2], // #10 Belgium - Italy
  [], // #11 Austria - Hungary
  [], // #12 Portugal - Iceland
  [], // #13 Russia - Slovakia
  [], // #14 Switzerland - Romania
  [], // #15 France - Albania
  [], // #16 England - Wales
  [], // #17 Ukraine - Northern Ireland
  [], // #18 Germany - Poland
  [], // #19 Italy - Sweden
  [], // #20 Czech Republic - Croatia
  [], // #21 Spain - Turkey
  [], // #22 Belgium - Ireland
  [], // #23 Iceland - Hungary
  [], // #24 Portugal - Austria
  [], // #25 Romania - Albania
  [], // #26 Switzerland - France
  [], // #27 Russia - Wales
  [], // #28 Slovakia - England
  [], // #29 Ukraine - Poland
  [], // #30 Northern Ireland - Germany
  [], // #31 Czech Republic - Turkey
  [], // #32 Croatia - Spain
  [], // #33 Iceland - Austria
  [], // #34 Hungary - Portugal
  [], // #35 Italy - Ireland
  [] // #36 Sweden - Belgium
];

var winner: string = undefined

var top_scorer: string = undefined

function compute_score(score_bets: number[][], winner_bet: string, top_scorer_bet: string) {
    var score = 0

    if (winner != undefined && winner_bet == winner) score += 5;
    if (top_scorer != undefined && top_scorer_bet == winner) score += 5;

    for (var i = 0; i < score_bets.length; ++i) {
        var bet = score_bets[i]
        var result = current_results[i]

        if (result.length != 0) {
            var home_score = result[0]
            var away_score = result[1]

            var betted_home_score = bet[0]
            var betted_away_score = bet[1]

            if (home_score == betted_home_score && away_score == betted_away_score) score += 3
            else {
                // tie
                if (home_score - away_score == betted_home_score - betted_away_score) score += 1

                // home win
                if (home_score > away_score && betted_home_score > betted_away_score) score += 1

                // away win
                if (away_score > home_score && betted_away_score > betted_home_score) score += 1
            }
        }
    }

    return score;
}