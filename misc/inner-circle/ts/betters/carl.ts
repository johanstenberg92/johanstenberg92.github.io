var carl_bets = [[3, 0], // #1 France - Albania
  [1, 1], // #2 Albania - Switzerland
  [2, 0], // #3 Wales - Slovakia
  [2, 1], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [1, 0], // #6 Poland - Northern Ireland
  [2, 0], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [0, 2], // #9 Ireland - Sweden
  [2, 0], // #10 Belgium - Italy
  [0, 0], // #11 Austria - Hungary
  [2, 0], // #12 Portugal - Iceland
  [1, 0], // #13 Russia - Slovakia
  [0, 1], // #14 Switzerland - Romania
  [2, 1], // #15 France - Albania
  [4, 0], // #16 England - Wales
  [2, 2], // #17 Ukraine - Northern Ireland
  [2, 0], // #18 Germany - Poland
  [1, 1], // #19 Italy - Sweden
  [0, 1], // #20 Czech Republic - Croatia
  [2, 1], // #21 Spain - Turkey
  [2, 1], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [2, 1], // #24 Portugal - Austria
  [1, 0], // #25 Romania - Albania
  [1, 2], // #26 Switzerland - France
  [0, 0], // #27 Russia - Wales
  [1, 2], // #28 Slovakia - England
  [1, 1], // #29 Ukraine - Poland
  [0, 1], // #30 Northern Ireland - Germany
  [0, 0], // #31 Czech Republic - Turkey
  [2, 0], // #32 Croatia - Spain
  [0, 0], // #33 Iceland - Austria
  [1, 2], // #34 Hungary - Portugal
  [1, 0], // #35 Italy - Ireland
  [3, 1], // #36 Sweden - Belgium
  
  // round of 16
  [1, 2], // #37 Switzerland - Poland
  [2, 0], // #38 Wales - Northern Ireland
  [1, 0], // #39 Croatia - Portugal
  [1, 0], // #40 France - Ireland
  [2, 0], // #41 Germany - Slovakia
  [1, 2], // #42 Hungary - Belgium
  [1, 0], // #43 Italy - Spain
  [2, 1], // #44 England - Iceland
];

// Championship Winner
var carl_winner = "Sweden"

// Top Scorer
var carl_top_scorer = "Thomas Muller"

var carl_better = new Better("Carl", carl_bets, carl_winner, carl_top_scorer);
