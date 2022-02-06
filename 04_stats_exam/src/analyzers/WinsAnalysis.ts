import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]) {
    let wins = 0;
    matches.forEach((match) => {
      const home = match[1];
      const away = match[2];
      const matchResult = match[5];

      if (
        (home === this.team && matchResult === MatchResult.HomeWin) ||
        (away === this.team && matchResult === MatchResult.AwayWin)
      ) {
        wins++;
      }
    });

    return `Team ${this.team} won ${wins} games`;
  }
}
