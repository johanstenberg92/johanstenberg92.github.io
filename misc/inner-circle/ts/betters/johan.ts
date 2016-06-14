var johan_bets = [
  [1, 0], // #1 France - Albania
  [0, 1], // #2 Albania - Switzerland
  [1, 1], // #3 Wales - Slovakia
  [1, 0], // #4 England - Russia
  [1, 1], // #5 Turkey - Croatia
  [1, 0], // #6 Poland - Northern Ireland
  [1, 0], // #7 Germany - Ukraine
  [1, 0], // #8 Spain - Czech Republic
  [0, 1], // #9 Ireland - Sweden
  [1, 1], // #10 Belgium - Italy
  [1, 0], // #11 Austria - Hungary
  [1, 0], // #12 Portugal - Iceland
  [1, 1], // #13 Russia - Slovakia
  [1, 0], // #14 Switzerland - Romania
  [2, 0], // #15 France - Albania
  [1, 0], // #16 England - Wales
  [2, 0], // #17 Ukraine - Northern Ireland
  [1, 0], // #18 Germany - Poland
  [1, 0], // #19 Italy - Sweden
  [1, 1], // #20 Czech Republic - Croatia
  [1, 0], // #21 Spain - Turkey
  [1, 0], // #22 Belgium - Ireland
  [1, 1], // #23 Iceland - Hungary
  [1, 1], // #24 Portugal - Austria
  [1, 1], // #25 Romania - Albania
  [0, 1], // #26 Switzerland - France
  [1, 0], // #27 Russia - Wales
  [1, 1], // #28 Slovakia - England
  [1, 1], // #29 Ukraine - Poland
  [0, 2], // #30 Northern Ireland - Germany
  [1, 1], // #31 Czech Republic - Turkey
  [1, 1], // #32 Croatia - Spain
  [0, 1], // #33 Iceland - Austria
  [0, 1], // #34 Hungary - Portugal
  [1, 0], // #35 Italy - Ireland
  [1, 1], // #36 Sweden - Belgium
];

// Championship Winner
var johan_winner = "Germany"

// Top Scorer
var johan_top_scorer = "Thomas Muller"

var johan_better = new Better("johan", johan_bets, johan_winner, johan_top_scorer);