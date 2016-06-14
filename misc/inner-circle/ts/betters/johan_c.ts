var johan_c_bets = [[2, 0], // #1 France - Albania
  [1, 1], // #2 Albania - Switzerland
  [1, 1], // #3 Wales - Slovakia
  [2, 0], // #4 England - Russia
  [2, 2], // #5 Turkey - Croatia
  [3, 1], // #6 Poland - Northern Ireland
  [3, 1], // #7 Germany - Ukraine
  [3, 1], // #8 Spain - Czech Republic
  [0, 1], // #9 Ireland - Sweden
  [2, 2], // #10 Belgium - Italy
  [1, 0], // #11 Austria - Hungary
  [1, 0], // #12 Portugal - Iceland
  [2, 1], // #13 Russia - Slovakia
  [3, 1], // #14 Switzerland - Romania
  [3, 0], // #15 France - Albania
  [3, 0], // #16 England - Wales
  [2, 2], // #17 Ukraine - Northern Ireland
  [2, 1], // #18 Germany - Poland
  [1, 2], // #19 Italy - Sweden
  [0, 2], // #20 Czech Republic - Croatia
  [3, 2], // #21 Spain - Turkey
  [3, 2], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [1, 1], // #24 Portugal - Austria
  [1, 2], // #25 Romania - Albania
  [1, 2], // #26 Switzerland - France
  [0, 1], // #27 Russia - Wales
  [1, 3], // #28 Slovakia - England
  [0, 2], // #29 Ukraine - Poland
  [0, 3], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [1, 2], // #32 Croatia - Spain
  [0, 1], // #33 Iceland - Austria
  [0, 1], // #34 Hungary - Portugal
  [2, 0], // #35 Italy - Ireland
  [1, 1], // #36 Sweden - Belgium
];

// Championship Winner
var johan_c_winner = "Germany"

// Top Scorer
var johan_c_top_scorer = "Mario Gomez"

var johan_c_better = new Better("Johan C", johan_c_bets, johan_c_winner, johan_c_top_scorer);
