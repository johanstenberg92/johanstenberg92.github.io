var anders_bets = [[3, 1], // #1 France - Albania
  [1, 2], // #2 Albania - Switzerland
  [1, 1], // #3 Wales - Slovakia
  [2, 2], // #4 England - Russia
  [2, 1], // #5 Turkey - Croatia
  [3, 0], // #6 Poland - Northern Ireland
  [2, 1], // #7 Germany - Ukraine
  [2, 1], // #8 Spain - Czech Republic
  [0, 3], // #9 Ireland - Sweden
  [2, 2], // #10 Belgium - Italy
  [3, 1], // #11 Austria - Hungary
  [2, 1], // #12 Portugal - Iceland
  [1, 0], // #13 Russia - Slovakia
  [1, 1], // #14 Switzerland - Romania
  [3, 0], // #15 France - Albania
  [2, 1], // #16 England - Wales
  [0, 0], // #17 Ukraine - Northern Ireland
  [3, 1], // #18 Germany - Poland
  [1, 2], // #19 Italy - Sweden
  [1, 2], // #20 Czech Republic - Croatia
  [2, 1], // #21 Spain - Turkey
  [2, 0], // #22 Belgium - Ireland
  [1, 0], // #23 Iceland - Hungary
  [2, 1], // #24 Portugal - Austria
  [2, 1], // #25 Romania - Albania
  [1, 2], // #26 Switzerland - France
  [1, 1], // #27 Russia - Wales
  [1, 3], // #28 Slovakia - England
  [2, 3], // #29 Ukraine - Poland
  [0, 2], // #30 Northern Ireland - Germany
  [0, 0], // #31 Czech Republic - Turkey
  [1, 2], // #32 Croatia - Spain
  [2, 2], // #33 Iceland - Austria
  [1, 3], // #34 Hungary - Portugal
  [2, 1], // #35 Italy - Ireland
  [2, 1], // #36 Sweden - Belgium
  
  // round of 16
  [0, 1], // #37 Switzerland - Poland
  [1, 0], // #38 Wales - Northern Ireland
  [0, 2], // #39 Croatia - Portugal
  [1, 0], // #40 France - Ireland
  [1, 1], // #41 Germany - Slovakia
  [0, 2], // #42 Hungary - Belgium
  [1, 0], // #43 Italy - Spain
  [1, 1], // #44 England - Iceland

  // QF
  [0, 2], // #45 Poland - Portugal
  [0, 2], // #46 Wales - Belgium
  [0, 1], // #47 Germany - Italy
  [1, 1], // #48 France - Iceland
];

// Championship Winner
var anders_winner = "France"

// Top Scorer
var anders_top_scorer = "Zlatan Ibrahimovic"

var anders_better = new Better("Anders", anders_bets, anders_winner, anders_top_scorer);
