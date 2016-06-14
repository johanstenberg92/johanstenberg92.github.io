var albin_bets = [[2, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [1, 0], // #3 Wales - Slovakia
  [3, 1], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [2, 0], // #6 Poland - Northern Ireland
  [3, 1], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [1, 2], // #9 Ireland - Sweden
  [1, 0], // #10 Belgium - Italy
  [1, 0], // #11 Austria - Hungary
  [3, 0], // #12 Portugal - Iceland
  [2, 0], // #13 Russia - Slovakia
  [2, 1], // #14 Switzerland - Romania
  [3, 0], // #15 France - Albania
  [2, 0], // #16 England - Wales
  [3, 0], // #17 Ukraine - Northern Ireland
  [2, 0], // #18 Germany - Poland
  [1, 1], // #19 Italy - Sweden
  [2, 0], // #20 Czech Republic - Croatia
  [1, 0], // #21 Spain - Turkey
  [2, 0], // #22 Belgium - Ireland
  [0, 2], // #23 Iceland - Hungary
  [2, 0], // #24 Portugal - Austria
  [1, 2], // #25 Romania - Albania
  [0, 2], // #26 Switzerland - France
  [0, 1], // #27 Russia - Wales
  [0, 3], // #28 Slovakia - England
  [0, 1], // #29 Ukraine - Poland
  [0, 4], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [1, 2], // #32 Croatia - Spain
  [0, 1], // #33 Iceland - Austria
  [1, 4], // #34 Hungary - Portugal
  [0, 1], // #35 Italy - Ireland
  [1, 3], // #36 Sweden - Belgium
];

// Championship Winner
var albin_winner = "Germany"

// Top Scorer
var albin_top_scorer = "Mario Gomez"

var albin_better = new Better("Albin", albin_bets, albin_winner, albin_top_scorer);
