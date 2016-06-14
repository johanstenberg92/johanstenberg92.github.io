var laleh_bets = [[2, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [1, 2], // #3 Wales - Slovakia
  [2, 1], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [2, 0], // #6 Poland - Northern Ireland
  [2, 0], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [1, 1], // #9 Ireland - Sweden
  [2, 1], // #10 Belgium - Italy
  [2, 1], // #11 Austria - Hungary
  [3, 0], // #12 Portugal - Iceland
  [1, 1], // #13 Russia - Slovakia
  [2, 2], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [3, 1], // #16 England - Wales
  [1, 0], // #17 Ukraine - Northern Ireland
  [2, 1], // #18 Germany - Poland
  [2, 1], // #19 Italy - Sweden
  [1, 1], // #20 Czech Republic - Croatia
  [3, 0], // #21 Spain - Turkey
  [1, 0], // #22 Belgium - Ireland
  [2, 2], // #23 Iceland - Hungary
  [2, 1], // #24 Portugal - Austria
  [1, 1], // #25 Romania - Albania
  [0, 2], // #26 Switzerland - France
  [1, 2], // #27 Russia - Wales
  [0, 2], // #28 Slovakia - England
  [1, 1], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [0, 2], // #32 Croatia - Spain
  [0, 1], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [2, 1], // #35 Italy - Ireland
  [0, 2], // #36 Sweden - Belgium
];

// Championship Winner
var laleh_winner = "France"

// Top Scorer
var laleh_top_scorer = "Thomas Muller"

var laleh_better = new Better("Laleh", laleh_bets, laleh_winner, laleh_top_scorer);
