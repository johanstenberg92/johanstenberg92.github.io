var Better = (function () {
    function Better(name, score_bets, winner, top_scorer) {
        this.name = name;
        this.score_bets = score_bets;
        this.winner = winner;
        this.top_scorer = top_scorer;
        this.score_evolution = compute_games_scores_evolution(score_bets);
        if (this.score_evolution.length > 0)
            this.score = this.score_evolution[this.score_evolution.length - 1];
        this.score += compute_winner_and_top_scorer_score(winner, top_scorer);
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
    [0, 2],
    [1, 1],
    [1, 2],
    [1, 1],
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
var latest_game_update = "Romania - Switzerland (15th of June)";
var winner = undefined;
var top_scorer = undefined;
function compute_winner_and_top_scorer_score(winner_bet, top_scorer_bet) {
    var score = 0;
    if (winner != undefined && winner_bet == winner)
        score += 5;
    if (top_scorer != undefined && top_scorer_bet == winner)
        score += 5;
    return score;
}
function compute_games_scores_evolution(score_bets) {
    var score_evolution = new Array();
    for (var i = 0; i < score_bets.length; ++i) {
        var score = 0;
        var bet = score_bets[i];
        var result = current_results[i];
        if (result.length != 0) {
            var home_score = result[0];
            var away_score = result[1];
            var betted_home_score = bet[0];
            var betted_away_score = bet[1];
            if (home_score == betted_home_score && away_score == betted_away_score)
                score = 3;
            else {
                if ((home_score - away_score == 0) && (betted_home_score - betted_away_score == 0))
                    score = 1;
                if (home_score > away_score && betted_home_score > betted_away_score)
                    score = 1;
                if (home_score < away_score && betted_home_score < betted_away_score)
                    score = 1;
            }
            if (score_evolution.length == 0)
                score_evolution.push(score);
            else {
                var last_score = score_evolution[score_evolution.length - 1];
                score_evolution.push(last_score + score);
            }
        }
    }
    return score_evolution;
}
var johan_s_bets = [[1, 0],
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
var johan_s_winner = "Germany";
var johan_s_top_scorer = "Thomas Muller";
var johan_s_better = new Better("Johan S", johan_s_bets, johan_s_winner, johan_s_top_scorer);
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
var carl_better = new Better("Carl", carl_bets, carl_winner, carl_top_scorer);
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
var andreas_bets = [[3, 0],
    [0, 2],
    [0, 0],
    [3, 2],
    [2, 2],
    [3, 0],
    [3, 1],
    [2, 0],
    [1, 3],
    [0, 2],
    [3, 0],
    [2, 1],
    [2, 0],
    [2, 1],
    [4, 0],
    [1, 1],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2],
    [1, 1],
    [2, 0],
    [2, 0],
    [0, 0],
    [1, 2],
    [1, 2],
    [3, 1],
    [0, 2],
    [1, 3],
    [0, 4],
    [0, 2],
    [1, 1],
    [0, 1],
    [0, 2],
    [2, 1],
    [1, 1],
];
var andreas_winner = "France";
var andreas_top_scorer = "Thomas Muller";
var andreas_better = new Better("Andreas", andreas_bets, andreas_winner, andreas_top_scorer);
var charlotta_bets = [[3, 0],
    [0, 0],
    [1, 1],
    [2, 2],
    [2, 2],
    [3, 0],
    [4, 1],
    [3, 0],
    [1, 1],
    [0, 2],
    [2, 1],
    [2, 1],
    [2, 0],
    [1, 1],
    [2, 0],
    [1, 1],
    [1, 1],
    [2, 2],
    [2, 1],
    [1, 2],
    [2, 1],
    [1, 1],
    [2, 0],
    [2, 0],
    [1, 2],
    [1, 3],
    [2, 0],
    [1, 2],
    [1, 3],
    [1, 3],
    [1, 3],
    [3, 3],
    [1, 0],
    [0, 3],
    [2, 0],
    [2, 1],
];
var charlotta_winner = "France";
var charlotta_top_scorer = "Antoine Griezmann";
var charlotta_better = new Better("Charlotta", charlotta_bets, charlotta_winner, charlotta_top_scorer);
var dan_erik_bets = [[3, 1],
    [1, 1],
    [0, 0],
    [2, 1],
    [0, 2],
    [1, 2],
    [3, 0],
    [2, 1],
    [1, 2],
    [1, 0],
    [1, 0],
    [1, 1],
    [2, 0],
    [0, 0],
    [2, 0],
    [2, 0],
    [0, 1],
    [2, 0],
    [1, 1],
    [2, 1],
    [3, 0],
    [3, 0],
    [0, 0],
    [2, 1],
    [2, 1],
    [0, 0],
    [1, 1],
    [1, 3],
    [1, 1],
    [0, 1],
    [0, 0],
    [2, 2],
    [0, 0],
    [0, 3],
    [2, 0],
    [2, 2],
];
var dan_erik_winner = "France";
var dan_erik_top_scorer = "Paul Pogba";
var dan_erik_better = new Better("Dan Erik", dan_erik_bets, dan_erik_winner, dan_erik_top_scorer);
var david_bets = [[2, 0],
    [1, 2],
    [1, 2],
    [2, 0],
    [1, 1],
    [2, 0],
    [4, 1],
    [2, 0],
    [0, 1],
    [2, 1],
    [1, 0],
    [2, 1],
    [1, 1],
    [2, 2],
    [3, 0],
    [3, 1],
    [1, 0],
    [2, 1],
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 0],
    [1, 0],
    [3, 1],
    [1, 1],
    [1, 2],
    [1, 0],
    [1, 1],
    [1, 1],
    [1, 3],
    [1, 2],
    [2, 2],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 2],
];
var david_winner = "Germany";
var david_top_scorer = "Mario Gomez";
var david_better = new Better("David", david_bets, david_winner, david_top_scorer);
var johan_c_bets = [[2, 0],
    [1, 1],
    [1, 1],
    [2, 0],
    [2, 2],
    [3, 1],
    [3, 1],
    [3, 1],
    [0, 1],
    [2, 2],
    [1, 0],
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 0],
    [3, 0],
    [2, 2],
    [2, 1],
    [1, 2],
    [0, 2],
    [3, 2],
    [3, 2],
    [1, 1],
    [1, 1],
    [1, 2],
    [1, 2],
    [0, 1],
    [1, 3],
    [0, 2],
    [0, 3],
    [1, 1],
    [1, 2],
    [0, 1],
    [0, 1],
    [2, 0],
    [1, 1],
];
var johan_c_winner = "Germany";
var johan_c_top_scorer = "Mario Gomez";
var johan_c_better = new Better("Johan C", johan_c_bets, johan_c_winner, johan_c_top_scorer);
var kholoud_bets = [[1, 0],
    [0, 1],
    [0, 2],
    [2, 1],
    [0, 3],
    [0, 0],
    [3, 1],
    [2, 1],
    [2, 0],
    [1, 2],
    [1, 0],
    [3, 1],
    [2, 0],
    [2, 1],
    [2, 0],
    [1, 0],
    [2, 1],
    [2, 0],
    [5, 0],
    [1, 3],
    [2, 0],
    [1, 1],
    [0, 1],
    [1, 0],
    [3, 1],
    [0, 0],
    [3, 1],
    [0, 1],
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
    [1, 1],
    [1, 3],
    [2, 0],
    [0, 3],
];
var kholoud_winner = "Italy";
var kholoud_top_scorer = "Christiano Ronaldo";
var kholoud_better = new Better("Kholoud", kholoud_bets, kholoud_winner, kholoud_top_scorer);
var laleh_bets = [[2, 0],
    [0, 1],
    [1, 2],
    [2, 1],
    [1, 2],
    [2, 0],
    [2, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 1],
    [3, 0],
    [1, 1],
    [2, 2],
    [2, 0],
    [3, 1],
    [1, 0],
    [2, 1],
    [2, 1],
    [1, 1],
    [3, 0],
    [1, 0],
    [2, 2],
    [2, 1],
    [1, 1],
    [0, 2],
    [1, 2],
    [0, 2],
    [1, 1],
    [0, 3],
    [1, 1],
    [0, 2],
    [0, 1],
    [0, 2],
    [2, 1],
    [0, 2],
];
var laleh_winner = "France";
var laleh_top_scorer = "Thomas Muller";
var laleh_better = new Better("Laleh", laleh_bets, laleh_winner, laleh_top_scorer);
var markus_bets = [[2, 0],
    [0, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 0],
    [3, 0],
    [2, 0],
    [0, 2],
    [0, 1],
    [1, 0],
    [2, 0],
    [2, 0],
    [2, 1],
    [3, 0],
    [2, 0],
    [2, 0],
    [3, 0],
    [2, 1],
    [1, 1],
    [2, 0],
    [2, 0],
    [1, 0],
    [2, 0],
    [2, 0],
    [1, 1],
    [3, 0],
    [0, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 2],
    [1, 2],
    [0, 3],
    [2, 0],
    [1, 2],
];
var markus_winner = "Germany";
var markus_top_scorer = "Thomas Muller";
var markus_better = new Better("Markus", markus_bets, markus_winner, markus_top_scorer);
var martin_bets = [[2, 0],
    [2, 2],
    [2, 1],
    [3, 1],
    [1, 0],
    [2, 1],
    [3, 1],
    [2, 1],
    [1, 3],
    [1, 1],
    [1, 1],
    [2, 0],
    [2, 1],
    [1, 2],
    [3, 1],
    [2, 1],
    [1, 0],
    [5, 1],
    [1, 1],
    [2, 1],
    [2, 0],
    [3, 0],
    [1, 1],
    [3, 1],
    [2, 1],
    [1, 4],
    [1, 1],
    [0, 3],
    [1, 1],
    [0, 3],
    [1, 2],
    [0, 3],
    [2, 3],
    [1, 1],
    [1, 0],
    [1, 3],
];
var martin_winner = "Germany";
var martin_top_scorer = "Thomas Muller";
var martin_better = new Better("Martin", martin_bets, martin_winner, martin_top_scorer);
var paul_bets = [[3, 0],
    [2, 1],
    [1, 0],
    [2, 2],
    [2, 2],
    [1, 1],
    [4, 0],
    [3, 1],
    [0, 1],
    [2, 1],
    [2, 1],
    [1, 1],
    [3, 0],
    [1, 1],
    [4, 0],
    [2, 1],
    [0, 1],
    [3, 1],
    [0, 0],
    [1, 1],
    [1, 2],
    [3, 1],
    [2, 0],
    [2, 1],
    [1, 2],
    [1, 3],
    [1, 0],
    [0, 4],
    [0, 2],
    [0, 3],
    [0, 3],
    [0, 2],
    [2, 2],
    [0, 2],
    [1, 1],
    [2, 1],
];
var paul_winner = "Germany";
var paul_top_scorer = "Antoine Griezmann";
var paul_better = new Better("Paul", paul_bets, paul_winner, paul_top_scorer);
var torsten_bets = [[4, 0],
    [0, 1],
    [1, 2],
    [1, 0],
    [1, 0],
    [1, 1],
    [1, 0],
    [2, 0],
    [0, 1],
    [0, 0],
    [3, 0],
    [1, 1],
    [0, 1],
    [1, 0],
    [4, 0],
    [3, 0],
    [1, 0],
    [3, 0],
    [1, 1],
    [0, 1],
    [3, 0],
    [4, 1],
    [1, 0],
    [1, 1],
    [1, 1],
    [1, 3],
    [2, 0],
    [1, 1],
    [3, 1],
    [0, 2],
    [1, 1],
    [0, 2],
    [1, 1],
    [0, 2],
    [3, 0],
    [1, 3],
];
var torsten_winner = "France";
var torsten_top_scorer = "Olivier Giroud";
var torsten_better = new Better("Torsten", torsten_bets, torsten_winner, torsten_top_scorer);
var vittorio_bets = [[1, 0],
    [0, 0],
    [0, 1],
    [2, 0],
    [1, 2],
    [2, 0],
    [1, 0],
    [1, 1],
    [1, 1],
    [0, 0],
    [3, 0],
    [1, 0],
    [0, 1],
    [2, 0],
    [2, 0],
    [1, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [0, 1],
    [1, 0],
    [3, 1],
    [2, 2],
    [1, 1],
    [1, 0],
    [0, 0],
    [2, 1],
    [1, 1],
    [0, 1],
    [0, 3],
    [1, 1],
    [1, 0],
    [0, 2],
    [0, 2],
    [1, 0],
    [0, 2],
];
var vittorio_winner = "Sweden";
var vittorio_top_scorer = "Antoine Griezmann";
var vittorio_better = new Better("Vittorio", vittorio_bets, vittorio_winner, vittorio_top_scorer);
var players = [
    leif_better,
    johan_s_better,
    carl_better,
    albin_better,
    alexander_better,
    anders_better,
    andreas_better,
    charlotta_better,
    dan_erik_better,
    david_better,
    johan_c_better,
    kholoud_better,
    laleh_better,
    markus_better,
    martin_better,
    paul_better,
    torsten_better,
    vittorio_better
];
players = players.sort(function (a, b) { return b.score - a.score; });
var max_score = players[0].score;
var step_size = Math.round(max_score / 10) + 1;
var group_results = group_statistics(players, current_results);
var group_results_full = Array(group_results.length);
var group_results_partial = Array(group_results.length);
for (var i = 0; i < group_results.length; ++i) {
    group_results_full[i] = group_results[i][0];
    group_results_partial[i] = group_results[i][1];
}
function group_statistics(betters, correct_scores) {
    var played_games = 0;
    for (var i = 0; i < correct_scores.length; ++i) {
        if (correct_scores[i].length != 0)
            played_games++;
    }
    var res = Array(played_games);
    for (var i = 0; i < played_games; ++i) {
        var fully_correct = 0;
        var partially_correct = 0;
        var correct_hs = correct_scores[i][0];
        var correct_as = correct_scores[i][1];
        for (var j = 0; j < betters.length; ++j) {
            var betted_hs = betters[j].score_bets[i][0];
            var betted_as = betters[j].score_bets[i][1];
            if (correct_hs == betted_hs && correct_as == betted_as) {
                ++fully_correct;
                ++partially_correct;
            }
            else if (correct_hs == correct_as && betted_hs == betted_as)
                ++partially_correct;
            else if (correct_hs > correct_as && betted_hs > betted_as)
                ++partially_correct;
            else if (correct_hs < correct_as && betted_hs < betted_as)
                ++partially_correct;
        }
        res[i] = [fully_correct, partially_correct];
    }
    return res;
}
var colors = [
    ["rgba(51,161,201,1)", "rgba(51,161,201,0.4)"],
    ["rgba(40,40,40,1)", "rgba(40,40,40,0.4)"],
    ["rgba(238,118,33,1)", "rgba(238,118,33,0.4)"],
    ["rgba(205,79,57,1)", "rgba(205,79,57,0.4)"],
    ["rgba(255,193,37,1)", "rgba(255,193,37,0.4)"],
    ["rgba(60,179,113,1)", "rgba(60,179,113,0.4)"],
    ["rgba(131,111,255,1)", "rgba(131,111,255,0.4)"],
    ["rgba(176,23,31,1)", "rgba(176,23,31,0.4)"],
    ["rgba(0,255,255,1)", "rgba(0,255,255,0.4)"],
    ["rgba(202,255,112,1)", "rgba(202,255,112,0.4)"],
    ["rgba(238,169,184,1)", "rgba(238,169,184,0.4)"]
];
function get_color(index) {
    var color_size = colors.length;
    return colors[index % color_size];
}
//# sourceMappingURL=tsc.js.map