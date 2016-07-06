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
    johan_c_better,
    kholoud_better,
    laleh_better,
    markus_better,
    martin_better,
    paul_better,
    torsten_better,
    vittorio_better
];

players = players.sort((a, b) => b.score - a.score)

var max_score = players[0].score

var step_size = Math.round(max_score / 10) + 1

var group_results = group_statistics(players, current_results)

var group_results_full = Array<number>(group_results.length)

var group_results_partial = Array<number>(group_results.length)

for (var i = 0; i < group_results.length; ++i) {
    group_results_full[i] = group_results[i][0]
    group_results_partial[i] = group_results[i][1]
}