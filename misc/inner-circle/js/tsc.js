var Better = (function () {
    function Better(name, score_bets, winner, top_scorer) {
        this.name = name;
        this.score = compute_score(score_bets, winner, top_scorer);
    }
    return Better;
}());
var current_results = [[2, 1],
    [0, 1],
    [2, 1],
    [1, 1],
    [0, 1],
    [1, 0],
    [2, 0],
    [1, 0],
    [1, 1],
    [0, 2],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var latest_game_update = "Belgium - Italy";
var winner = undefined;
var top_scorer = undefined;
function compute_score(score_bets, winner_bet, top_scorer_bet) {
    var score = 0;
    if (winner != undefined && winner_bet == winner)
        score += 5;
    if (top_scorer != undefined && top_scorer_bet == winner)
        score += 5;
    for (var i = 0; i < score_bets.length; ++i) {
        var bet = score_bets[i];
        var result = current_results[i];
        if (result.length != 0) {
            var home_score = result[0];
            var away_score = result[1];
            var betted_home_score = bet[0];
            var betted_away_score = bet[1];
            if (home_score == betted_home_score && away_score == betted_away_score)
                score += 3;
            else {
                if ((home_score - away_score == 0) && (betted_home_score - betted_away_score == 0))
                    score += 1;
                if (home_score > away_score && betted_home_score > betted_away_score)
                    score += 1;
                if (home_score < away_score && betted_home_score < betted_away_score)
                    score += 1;
            }
        }
    }
    return score;
}
var johan_bets = [[1, 0],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 0],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 1],
    [1, 0],
    [2, 0],
    [1, 0],
    [1, 0],
    [2, 0],
    [1, 0],
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 1],
    [1, 1],
    [1, 1],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 1],
    [1, 1],
    [0, 1],
    [0, 1],
    [1, 0],
    [1, 1],
];
var johan_winner = "Germany";
var johan_top_scorer = "Thomas Muller";
var johan_better = new Better("Johan S", johan_bets, johan_winner, johan_top_scorer);
var leif_bets = [[2, 0],
    [0, 2],
    [2, 1],
    [3, 1],
    [1, 2],
    [3, 1],
    [2, 1],
    [2, 0],
    [1, 2],
    [1, 1],
    [2, 0],
    [3, 0],
    [1, 0],
    [2, 1],
    [3, 1],
    [1, 1],
    [3, 2],
    [3, 2],
    [1, 2],
    [1, 2],
    [3, 1],
    [3, 0],
    [1, 1],
    [2, 2],
    [1, 1],
    [1, 1],
    [2, 2],
    [1, 4],
    [2, 3],
    [0, 4],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 3],
    [2, 0],
    [1, 1],
];
var leif_winner = "Germany";
var leif_top_scorer = "Thomas Muller";
var leif_better = new Better("Leif", leif_bets, leif_winner, leif_top_scorer);
var carl_bets = [[3, 0],
    [1, 1],
    [2, 0],
    [2, 1],
    [1, 2],
    [1, 0],
    [2, 0],
    [2, 0],
    [0, 2],
    [2, 0],
    [0, 0],
    [2, 0],
    [1, 0],
    [0, 1],
    [2, 1],
    [4, 0],
    [2, 2],
    [2, 0],
    [1, 1],
    [0, 1],
    [2, 1],
    [2, 1],
    [1, 1],
    [2, 1],
    [1, 0],
    [1, 2],
    [0, 0],
    [1, 2],
    [1, 1],
    [0, 1],
    [0, 0],
    [2, 0],
    [0, 0],
    [1, 2],
    [1, 0],
    [3, 1],
];
var carl_winner = "Sweden";
var carl_top_scorer = "Thomas Muller";
var carl_better = new Better("Carl S", carl_bets, carl_winner, carl_top_scorer);
var albin_bets = [[2, 0],
    [0, 1],
    [1, 0],
    [3, 1],
    [1, 2],
    [2, 0],
    [3, 1],
    [2, 0],
    [1, 2],
    [1, 0],
    [1, 0],
    [3, 0],
    [2, 0],
    [2, 1],
    [3, 0],
    [2, 0],
    [3, 0],
    [2, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [2, 0],
    [0, 2],
    [2, 0],
    [1, 2],
    [0, 2],
    [0, 1],
    [0, 3],
    [0, 1],
    [0, 4],
    [1, 1],
    [1, 2],
    [0, 1],
    [1, 4],
    [0, 1],
    [1, 3],
];
var albin_winner = "Germany";
var albin_top_scorer = "Mario Gomez";
var albin_better = new Better("Albin", albin_bets, albin_winner, albin_top_scorer);
var alexander_bets = [[2, 0],
    [0, 1],
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 0],
    [2, 1],
    [2, 1],
    [1, 2],
    [2, 2],
    [1, 1],
    [2, 0],
    [3, 1],
    [1, 1],
    [3, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [3, 1],
    [0, 0],
    [0, 1],
    [2, 0],
    [2, 1],
    [3, 0],
    [1, 0],
    [2, 2],
    [2, 0],
    [2, 3],
    [0, 1],
    [0, 3],
    [1, 2],
    [2, 2],
    [1, 0],
    [0, 2],
    [1, 0],
    [2, 1],
];
var alexander_winner = "France";
var alexander_top_scorer = "Thomas Muller";
var alexander_better = new Better("Alexander", alexander_bets, alexander_winner, alexander_top_scorer);
var anders_bets = [[3, 1],
    [1, 2],
    [1, 1],
    [2, 2],
    [2, 1],
    [3, 0],
    [2, 1],
    [2, 1],
    [0, 3],
    [2, 2],
    [3, 1],
    [2, 1],
    [1, 0],
    [1, 1],
    [3, 0],
    [2, 1],
    [0, 0],
    [3, 1],
    [1, 2],
    [1, 2],
    [2, 1],
    [2, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [1, 2],
    [1, 1],
    [1, 3],
    [2, 3],
    [0, 2],
    [0, 0],
    [1, 2],
    [2, 2],
    [1, 3],
    [2, 1],
    [2, 1],
];
var anders_winner = "France";
var anders_top_scorer = "Zlatan Ibrahimovic";
var anders_better = new Better("Anders", anders_bets, anders_winner, anders_top_scorer);
var players = [
    leif_better,
    johan_better,
    carl_better,
    albin_better,
    alexander_better,
    anders_better
];
players = players.sort(function (a, b) { return b.score - a.score; });
//# sourceMappingURL=tsc.js.map