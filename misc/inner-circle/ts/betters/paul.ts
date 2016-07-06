var paul_bets = [[3, 0], // #1 France - Albania
  [2, 1], // #2 Albania - Switzerland
  [1, 0], // #3 Wales - Slovakia
  [2, 2], // #4 England - Russia
  [2, 2], // #5 Turkey - Croatia
  [1, 1], // #6 Poland - Northern Ireland
  [4, 0], // #7 Germany - Ukraine
  [3, 1], // #8 Spain - Czech Republic
  [0, 1], // #9 Ireland - Sweden
  [2, 1], // #10 Belgium - Italy
  [2, 1], // #11 Austria - Hungary
  [1, 1], // #12 Portugal - Iceland
  [3, 0], // #13 Russia - Slovakia
  [1, 1], // #14 Switzerland - Romania
  [4, 0], // #15 France - Albania
  [2, 1], // #16 England - Wales
  [0, 1], // #17 Ukraine - Northern Ireland
  [3, 1], // #18 Germany - Poland
  [0, 0], // #19 Italy - Sweden
  [1, 1], // #20 Czech Republic - Croatia
  [1, 2], // #21 Spain - Turkey
  [3, 1], // #22 Belgium - Ireland
  [2, 0], // #23 Iceland - Hungary
  [2, 1], // #24 Portugal - Austria
  [1, 2], // #25 Romania - Albania
  [1, 3], // #26 Switzerland - France
  [1, 0], // #27 Russia - Wales
  [0, 4], // #28 Slovakia - England
  [0, 2], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [0, 3], // #31 Czech Republic - Turkey
  [0, 2], // #32 Croatia - Spain
  [2, 2], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [1, 1], // #35 Italy - Ireland
  [2, 1], // #36 Sweden - Belgium
  
  // round of 16
  [1, 1], // #37 Switzerland - Poland
  [2, 1], // #38 Wales - Northern Ireland
  [1, 2], // #39 Croatia - Portugal
  [1, 0], // #40 France - Ireland
  [2, 0], // #41 Germany - Slovakia
  [1, 1], // #42 Hungary - Belgium
  [0, 1], // #43 Italy - Spain
  [1, 1], // #44 England - Iceland

  // QF
  [0, 1], // #45 Poland - Portugal
  [1, 1], // #46 Wales - Belgium
  [2, 0], // #47 Germany - Italy
  [1, 1], // #48 France - Iceland
];

// Championship Winner
var paul_winner = "Germany"

// Top Scorer
var paul_top_scorer = "Antoine Griezmann"

var paul_better = new Better("Paul", paul_bets, paul_winner, paul_top_scorer);
