var torsten_bets = [[4, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [1, 2], // #3 Wales - Slovakia
  [1, 0], // #4 England - Russia
  [1, 0], // #5 Turkey - Croatia
  [1, 1], // #6 Poland - Northern Ireland
  [1, 0], // #7 Germany - Ukraine
  [2, 0], // #8 Spain - Czech Republic
  [0, 1], // #9 Ireland - Sweden
  [0, 0], // #10 Belgium - Italy
  [3, 0], // #11 Austria - Hungary
  [1, 1], // #12 Portugal - Iceland
  [0, 1], // #13 Russia - Slovakia
  [1, 0], // #14 Switzerland - Romania
  [4, 0], // #15 France - Albania
  [3, 0], // #16 England - Wales
  [1, 0], // #17 Ukraine - Northern Ireland
  [3, 0], // #18 Germany - Poland
  [1, 1], // #19 Italy - Sweden
  [0, 1], // #20 Czech Republic - Croatia
  [3, 0], // #21 Spain - Turkey
  [4, 1], // #22 Belgium - Ireland
  [1, 0], // #23 Iceland - Hungary
  [1, 1], // #24 Portugal - Austria
  [1, 1], // #25 Romania - Albania
  [1, 3], // #26 Switzerland - France
  [2, 0], // #27 Russia - Wales
  [1, 1], // #28 Slovakia - England
  [3, 1], // #29 Ukraine - Poland
  [0, 2], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [0, 2], // #32 Croatia - Spain
  [1, 1], // #33 Iceland - Austria
  [0, 2], // #34 Hungary - Portugal
  [3, 0], // #35 Italy - Ireland
  [1, 3], // #36 Sweden - Belgium
];

// Championship Winner
var torsten_winner = "France"

// Top Scorer
var torsten_top_scorer = "Olivier Giroud"

var torsten_better = new Better("Torsten", torsten_bets, torsten_winner, torsten_top_scorer);
