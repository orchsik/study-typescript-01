import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

/** Issues
 * [x] Magic string comparisons -> enum
 * [x] Source of data is hardcoded -> CsvFileReader
 * [ ] Data array is all strings, even though it might have numbers in it
 * [ ] Variable named after a specific team
 * [ ] Analysis type is fixed
 * [ ] No ability to output the report in diffrent formats
 */

/** enum - enumeration
 * Follow near-identical syntax rules as normal objects
 * Creates an object with the same keys and values when converted from TS to JS
 * Primary goal is to signal to other engineers that these are all closely related values
 * Use whenever we have small fixed set of values that are all closely related and known at complie time
 */
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log({ manUnitedWins });
