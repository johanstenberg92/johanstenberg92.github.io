var charlotta_bets = [[3, 0], // #1 France - Albania
  [0, 0], // #2 Albania - Switzerland
  [1, 1], // #3 Wales - Slovakia
  [2, 2], // #4 England - Russia
  [2, 2], // #5 Turkey - Croatia
  [3, 0], // #6 Poland - Northern Ireland
  [4, 1], // #7 Germany - Ukraine
  [3, 0], // #8 Spain - Czech Republic
  [1, 1], // #9 Ireland - Sweden
  [0, 2], // #10 Belgium - Italy
  [2, 1], // #11 Austria - Hungary
  [2, 1], // #12 Portugal - Iceland
  [2, 0], // #13 Russia - Slovakia
  [1, 1], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [1, 1], // #16 England - Wales
  [1, 1], // #17 Ukraine - Northern Ireland
  [2, 2], // #18 Germany - Poland
  [2, 1], // #19 Italy - Sweden
  [1, 2], // #20 Czech Republic - Croatia
  [2, 1], // #21 Spain - Turkey
  [1, 1], // #22 Belgium - Ireland
  [2, 0], // #23 Iceland - Hungary
  [2, 0], // #24 Portugal - Austria
  [1, 2], // #25 Romania - Albania
  [1, 3], // #26 Switzerland - France
  [2, 0], // #27 Russia - Wales
  [1, 2], // #28 Slovakia - England
  [1, 3], // #29 Ukraine - Poland
  [1, 3], // #30 Northern Ireland - Germany
  [1, 3], // #31 Czech Republic - Turkey
  [3, 3], // #32 Croatia - Spain
  [1, 0], // #33 Iceland - Austria
  [0, 3], // #34 Hungary - Portugal
  [2, 0], // #35 Italy - Ireland
  [2, 1], // #36 Sweden - Belgium
  
  // round of 16
  [0, 1], // #37 Switzerland - Poland
  [2, 1], // #38 Wales - Northern Ireland
  [3, 2], // #39 Croatia - Portugal
  [1, 1], // #40 France - Ireland
  [2, 0], // #41 Germany - Slovakia
  [1, 1], // #42 Hungary - Belgium
  [0, 0], // #43 Italy - Spain
  [0, 1], // #44 England - Iceland
];

// Championship Winner
var charlotta_winner = "France"

// Top Scorer
var charlotta_top_scorer = "Antoine Griezmann"

var charlotta_better = new Better("Charlotta", charlotta_bets, charlotta_winner, charlotta_top_scorer);
