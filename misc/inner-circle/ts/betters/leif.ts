var leif_bets = [[2, 0], // #1 France - Albania
  [0, 2], // #2 Albania - Switzerland
  [2, 1], // #3 Wales - Slovakia
  [3, 1], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [3, 1], // #6 Poland - Northern Ireland
  [2, 1], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [1, 2], // #9 Ireland - Sweden
  [1, 1], // #10 Belgium - Italy
  [2, 0], // #11 Austria - Hungary
  [3, 0], // #12 Portugal - Iceland
  [1, 0], // #13 Russia - Slovakia
  [2, 1], // #14 Switzerland - Romania
  [3, 1], // #15 France - Albania
  [1, 1], // #16 England - Wales
  [3, 2], // #17 Ukraine - Northern Ireland
  [3, 2], // #18 Germany - Poland
  [1, 2], // #19 Italy - Sweden
  [1, 2], // #20 Czech Republic - Croatia
  [3, 1], // #21 Spain - Turkey
  [3, 0], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [2, 2], // #24 Portugal - Austria
  [1, 1], // #25 Romania - Albania
  [1, 1], // #26 Switzerland - France
  [2, 2], // #27 Russia - Wales
  [1, 4], // #28 Slovakia - England
  [2, 3], // #29 Ukraine - Poland
  [0, 4], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [1, 2], // #32 Croatia - Spain
  [1, 3], // #33 Iceland - Austria
  [1, 3], // #34 Hungary - Portugal
  [2, 0], // #35 Italy - Ireland
  [1, 1], // #36 Sweden - Belgium
];

// Championship Winner
var leif_winner = "Germany"

// Top Scorer
var leif_top_scorer = "Thomas Muller"

var leif_better = new Better("Leif", leif_bets, leif_winner, leif_top_scorer);
