var vittorio_bets = [[1, 0], // #1 France - Albania
  [0, 0], // #2 Albania - Switzerland
  [0, 1], // #3 Wales - Slovakia
  [2, 0], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [2, 0], // #6 Poland - Northern Ireland
  [1, 0], // #7 Germany - Ukraine
  [1, 1], // #8 Spain - Czech Republic
  [1, 1], // #9 Ireland - Sweden
  [0, 0], // #10 Belgium - Italy
  [3, 0], // #11 Austria - Hungary
  [1, 0], // #12 Portugal - Iceland
  [0, 1], // #13 Russia - Slovakia
  [2, 0], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [1, 0], // #16 England - Wales
  [1, 0], // #17 Ukraine - Northern Ireland
  [2, 1], // #18 Germany - Poland
  [2, 1], // #19 Italy - Sweden
  [0, 1], // #20 Czech Republic - Croatia
  [1, 0], // #21 Spain - Turkey
  [3, 1], // #22 Belgium - Ireland
  [2, 2], // #23 Iceland - Hungary
  [1, 1], // #24 Portugal - Austria
  [1, 0], // #25 Romania - Albania
  [0, 0], // #26 Switzerland - France
  [2, 1], // #27 Russia - Wales
  [1, 1], // #28 Slovakia - England
  [0, 1], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [1, 0], // #32 Croatia - Spain
  [0, 2], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [1, 0], // #35 Italy - Ireland
  [0, 2], // #36 Sweden - Belgium
  
  // round of 16
  [0, 1], // #37 Switzerland - Poland
  [2, 0], // #38 Wales - Northern Ireland
  [2, 1], // #39 Croatia - Portugal
  [1, 0], // #40 France - Ireland
  [1, 0], // #41 Germany - Slovakia
  [0, 2], // #42 Hungary - Belgium
  [1, 1], // #43 Italy - Spain
  [1, 0], // #44 England - Iceland

  // QF
  [0, 0], // #45 Poland - Portugal
  [0, 1], // #46 Wales - Belgium
  [0, 1], // #47 Germany - Italy
  [1, 1], // #48 France - Iceland
];

// Championship Winner
var vittorio_winner = "Italy"

// Top Scorer
var vittorio_top_scorer = "Antoine Griezmann"

var vittorio_better = new Better("Vittorio", vittorio_bets, vittorio_winner, vittorio_top_scorer);