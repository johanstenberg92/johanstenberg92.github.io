var martin_bets = [[2, 0], // #1 France - Albania
  [2, 2], // #2 Albania - Switzerland
  [2, 1], // #3 Wales - Slovakia
  [3, 1], // #4 England - Russia
  [1, 0], // #5 Turkey - Croatia
  [2, 1], // #6 Poland - Northern Ireland
  [3, 1], // #7 Germany - Ukraine
  [2, 1], // #8 Spain - Czech Republic
  [1, 3], // #9 Ireland - Sweden
  [1, 1], // #10 Belgium - Italy
  [1, 1], // #11 Austria - Hungary
  [2, 0], // #12 Portugal - Iceland
  [2, 1], // #13 Russia - Slovakia
  [1, 2], // #14 Switzerland - Romania
  [3, 1], // #15 France - Albania
  [2, 1], // #16 England - Wales
  [1, 0], // #17 Ukraine - Northern Ireland
  [5, 1], // #18 Germany - Poland
  [1, 1], // #19 Italy - Sweden
  [2, 1], // #20 Czech Republic - Croatia
  [2, 0], // #21 Spain - Turkey
  [3, 0], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [3, 1], // #24 Portugal - Austria
  [2, 1], // #25 Romania - Albania
  [1, 4], // #26 Switzerland - France
  [1, 1], // #27 Russia - Wales
  [0, 3], // #28 Slovakia - England
  [1, 1], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [1, 2], // #31 Czech Republic - Turkey
  [0, 3], // #32 Croatia - Spain
  [2, 3], // #33 Iceland - Austria
  [1, 1], // #34 Hungary - Portugal
  [1, 0], // #35 Italy - Ireland
  [1, 3], // #36 Sweden - Belgium
  
  // round of 16
  [0, 0], // #37 Switzerland - Poland
  [1, 0], // #38 Wales - Northern Ireland
  [1, 0], // #39 Croatia - Portugal
  [2, 0], // #40 France - Ireland
  [2, 1], // #41 Germany - Slovakia
  [0, 1], // #42 Hungary - Belgium
  [0, 0], // #43 Italy - Spain
  [0, 0], // #44 England - Iceland

  // QF
  [0, 0], // #45 Poland - Portugal
  [1, 2], // #46 Wales - Belgium
  [2, 0], // #47 Germany - Italy
  [2, 0], // #48 France - Iceland
];

// Championship Winner
var martin_winner = "Germany"

// Top Scorer
var martin_top_scorer = "Thomas Muller"

var martin_better = new Better("Martin", martin_bets, martin_winner, martin_top_scorer);
