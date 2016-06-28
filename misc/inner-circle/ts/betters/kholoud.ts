var kholoud_bets = [[1, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [0, 2], // #3 Wales - Slovakia
  [2, 1], // #4 England - Russia
  [0, 3], // #5 Turkey - Croatia
  [0, 0], // #6 Poland - Northern Ireland
  [3, 1], // #7 Germany - Ukraine
  [2, 1], // #8 Spain - Czech Republic
  [2, 0], // #9 Ireland - Sweden
  [1, 2], // #10 Belgium - Italy
  [1, 0], // #11 Austria - Hungary
  [3, 1], // #12 Portugal - Iceland
  [2, 0], // #13 Russia - Slovakia
  [2, 1], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [1, 0], // #16 England - Wales
  [2, 1], // #17 Ukraine - Northern Ireland
  [2, 0], // #18 Germany - Poland
  [5, 0], // #19 Italy - Sweden
  [1, 3], // #20 Czech Republic - Croatia
  [2, 0], // #21 Spain - Turkey
  [1, 1], // #22 Belgium - Ireland
  [0, 1], // #23 Iceland - Hungary
  [1, 0], // #24 Portugal - Austria
  [3, 1], // #25 Romania - Albania
  [0, 0], // #26 Switzerland - France
  [3, 1], // #27 Russia - Wales
  [0, 1], // #28 Slovakia - England
  [1, 1], // #29 Ukraine - Poland
  [1, 2], // #30 Northern Ireland - Germany
  [2, 1], // #31 Czech Republic - Turkey
  [2, 2], // #32 Croatia - Spain
  [1, 1], // #33 Iceland - Austria
  [1, 3], // #34 Hungary - Portugal
  [2, 0], // #35 Italy - Ireland
  [0, 3], // #36 Sweden - Belgium
  
  // round of 16
  [1, 2], // #37 Switzerland - Poland
  [2, 0], // #38 Wales - Northern Ireland
  [1, 1], // #39 Croatia - Portugal
  [2, 0], // #40 France - Ireland
  [3, 1], // #41 Germany - Slovakia
  [1, 3], // #42 Hungary - Belgium
  [1, 0], // #43 Italy - Spain
  [3, 0], // #44 England - Iceland
];

// Championship Winner
var kholoud_winner = "Italy"

// Top Scorer
var kholoud_top_scorer = "Christiano Ronaldo"

var kholoud_better = new Better("Kholoud", kholoud_bets, kholoud_winner, kholoud_top_scorer);
