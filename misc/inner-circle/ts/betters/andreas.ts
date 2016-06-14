var andreas_bets = [[3, 0], // #1 France - Albania
  [0, 2], // #2 Albania - Switzerland
  [0, 0], // #3 Wales - Slovakia
  [3, 2], // #4 England - Russia
  [2, 2], // #5 Turkey - Croatia
  [3, 0], // #6 Poland - Northern Ireland
  [3, 1], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [1, 3], // #9 Ireland - Sweden
  [0, 2], // #10 Belgium - Italy
  [3, 0], // #11 Austria - Hungary
  [2, 1], // #12 Portugal - Iceland
  [2, 0], // #13 Russia - Slovakia
  [2, 1], // #14 Switzerland - Romania
  [4, 0], // #15 France - Albania
  [1, 1], // #16 England - Wales
  [2, 0], // #17 Ukraine - Northern Ireland
  [2, 1], // #18 Germany - Poland
  [2, 2], // #19 Italy - Sweden
  [1, 2], // #20 Czech Republic - Croatia
  [1, 1], // #21 Spain - Turkey
  [2, 0], // #22 Belgium - Ireland
  [2, 0], // #23 Iceland - Hungary
  [0, 0], // #24 Portugal - Austria
  [1, 2], // #25 Romania - Albania
  [1, 2], // #26 Switzerland - France
  [3, 1], // #27 Russia - Wales
  [0, 2], // #28 Slovakia - England
  [1, 3], // #29 Ukraine - Poland
  [0, 4], // #30 Northern Ireland - Germany
  [0, 2], // #31 Czech Republic - Turkey
  [1, 1], // #32 Croatia - Spain
  [0, 1], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [2, 1], // #35 Italy - Ireland
  [1, 1], // #36 Sweden - Belgium
];

// Championship Winner
var andreas_winner = "France"

// Top Scorer
var andreas_top_scorer = "Thomas Muller"

var andreas_better = new Better("Andreas", andreas_bets, andreas_winner, andreas_top_scorer);
