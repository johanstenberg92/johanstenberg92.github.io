var current_results = [[2, 1], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [2, 1], // #3 Wales - Slovakia
  [1, 1], // #4 England - Russia
  [0, 1], // #5 Turkey - Croatia
  [1, 0], // #6 Poland - Northern Ireland
  [2, 0], // #7 Germany - Ukraine
  [1, 0], // #8 Spain - Czech Republic
  [1, 1], // #9 Ireland - Sweden
  [0, 2], // #10 Belgium - Italy
  [0, 2], // #11 Austria - Hungary
  [1, 1], // #12 Portugal - Iceland
  [1, 2], // #13 Russia - Slovakia
  [1, 1], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [2, 1], // #16 England - Wales
  [0, 2], // #17 Ukraine - Northern Ireland
  [0, 0], // #18 Germany - Poland
  [1, 0], // #19 Italy - Sweden
  [2, 2], // #20 Czech Republic - Croatia
  [3, 0], // #21 Spain - Turkey
  [3, 0], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [0, 0], // #24 Portugal - Austria
  [0, 1], // #25 Romania - Albania
  [0, 0], // #26 Switzerland - France
  [0, 3], // #27 Russia - Wales
  [0, 0], // #28 Slovakia - England
  [0, 1], // #29 Ukraine - Poland
  [0, 1], // #30 Northern Ireland - Germany
  [0, 2], // #31 Czech Republic - Turkey
  [2, 1], // #32 Croatia - Spain
  [2, 1], // #33 Iceland - Austria
  [3, 3], // #34 Hungary - Portugal
  [0, 1], // #35 Italy - Ireland
  [0, 1] // #36 Sweden - Belgium
];

var latest_game_update = "Sweden - Belgium (22th of June)"

var winner: string = undefined

var top_scorer: string = undefined

function compute_winner_and_top_scorer_score(winner_bet: string, top_scorer_bet: string) {
    var score = 0

    if (winner != undefined && winner_bet == winner) score += 5
    if (top_scorer != undefined && top_scorer_bet == winner) score += 5

    return score
}

function compute_games_scores_evolution(score_bets: number[][]) {
    var score_evolution = new Array<number>()

    for (var i = 0; i < score_bets.length; ++i) {
        var score = 0;
        var bet = score_bets[i]
        var result = current_results[i]

        if (result.length != 0) {
            var home_score = result[0]
            var away_score = result[1]

            var betted_home_score = bet[0]
            var betted_away_score = bet[1]

            if (home_score == betted_home_score && away_score == betted_away_score) score = 3
            else {
                // tie
                if ((home_score - away_score == 0) && (betted_home_score - betted_away_score == 0)) score = 1

                // home win
                if (home_score > away_score && betted_home_score > betted_away_score) score = 1

                // away win
                if (home_score < away_score && betted_home_score < betted_away_score) score = 1
            }
            
            if (score_evolution.length == 0) score_evolution.push(score)
            else {
                var last_score = score_evolution[score_evolution.length - 1]
                score_evolution.push(last_score + score)
            }
        }
    }

    return score_evolution
}