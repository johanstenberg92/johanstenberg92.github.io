var markus_bets = [[2, 0], // #1 France - Albania
  [0, 2], // #2 Albania - Switzerland
  [1, 2], // #3 Wales - Slovakia
  [1, 2], // #4 England - Russia
  [1, 2], // #5 Turkey - Croatia
  [1, 0], // #6 Poland - Northern Ireland
  [3, 0], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [0, 2], // #9 Ireland - Sweden
  [0, 1], // #10 Belgium - Italy
  [1, 0], // #11 Austria - Hungary
  [2, 0], // #12 Portugal - Iceland
  [2, 0], // #13 Russia - Slovakia
  [2, 1], // #14 Switzerland - Romania
  [3, 0], // #15 France - Albania
  [2, 0], // #16 England - Wales
  [2, 0], // #17 Ukraine - Northern Ireland
  [3, 0], // #18 Germany - Poland
  [2, 1], // #19 Italy - Sweden
  [1, 1], // #20 Czech Republic - Croatia
  [2, 0], // #21 Spain - Turkey
  [2, 0], // #22 Belgium - Ireland
  [1, 0], // #23 Iceland - Hungary
  [2, 0], // #24 Portugal - Austria
  [2, 0], // #25 Romania - Albania
  [1, 1], // #26 Switzerland - France
  [3, 0], // #27 Russia - Wales
  [0, 1], // #28 Slovakia - England
  [0, 1], // #29 Ukraine - Poland
  [0, 2], // #30 Northern Ireland - Germany
  [1, 0], // #31 Czech Republic - Turkey
  [1, 2], // #32 Croatia - Spain
  [1, 2], // #33 Iceland - Austria
  [0, 3], // #34 Hungary - Portugal
  [2, 0], // #35 Italy - Ireland
  [1, 2], // #36 Sweden - Belgium
];

// Championship Winner
var markus_winner = "Germany"

// Top Scorer
var markus_top_scorer = "Thomas Muller"

var markus_better = new Better("Markus", markus_bets, markus_winner, markus_top_scorer);
