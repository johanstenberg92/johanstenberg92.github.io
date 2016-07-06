var alexander_bets = [[2, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [1, 1], // #3 Wales - Slovakia
  [1, 2], // #4 England - Russia
  [2, 2], // #5 Turkey - Croatia
  [2, 0], // #6 Poland - Northern Ireland
  [2, 1], // #7 Germany - Ukraine
  [2, 1], // #8 Spain - Czech Republic
  [1, 2], // #9 Ireland - Sweden
  [2, 2], // #10 Belgium - Italy
  [1, 1], // #11 Austria - Hungary
  [2, 0], // #12 Portugal - Iceland
  [3, 1], // #13 Russia - Slovakia
  [1, 1], // #14 Switzerland - Romania
  [3, 0], // #15 France - Albania
  [2, 0], // #16 England - Wales
  [1, 1], // #17 Ukraine - Northern Ireland
  [2, 1], // #18 Germany - Poland
  [3, 1], // #19 Italy - Sweden
  [0, 0], // #20 Czech Republic - Croatia
  [0, 1], // #21 Spain - Turkey
  [2, 0], // #22 Belgium - Ireland
  [2, 1], // #23 Iceland - Hungary
  [3, 0], // #24 Portugal - Austria
  [1, 0], // #25 Romania - Albania
  [2, 2], // #26 Switzerland - France
  [2, 0], // #27 Russia - Wales
  [2, 3], // #28 Slovakia - England
  [0, 1], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [1, 2], // #31 Czech Republic - Turkey
  [2, 2], // #32 Croatia - Spain
  [1, 0], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [1, 0], // #35 Italy - Ireland
  [2, 1], // #36 Sweden - Belgium

  // round of 16
  [0, 2], // #37 Switzerland - Poland
  [2, 1], // #38 Wales - Northern Ireland
  [3, 1], // #39 Croatia - Portugal
  [2, 0], // #40 France - Ireland
  [3, 1], // #41 Germany - Slovakia
  [1, 2], // #42 Hungary - Belgium
  [2, 2], // #43 Italy - Spain
  [1, 1], // #44 England - Iceland

  // QF
  [2, 2], // #45 Poland - Portugal
  [1, 3], // #46 Wales - Belgium
  [2, 1], // #47 Germany - Italy
  [3, 1], // #48 France - Iceland
];

// Championship Winner
var alexander_winner = "France"

// Top Scorer
var alexander_top_scorer = "Thomas Muller"

var alexander_better = new Better("Alexander", alexander_bets, alexander_winner, alexander_top_scorer);
