import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

/** Issues
 * [x] Magic string comparisons -> enum
 * [x] Source of data is hardcoded -> CsvFileReader
 * [x] Data array is all strings, even though it might have numbers in it -> fix CsvFileReader
      [x] Non-reusable CsvFileReader(csv file diffrent format) -> using abstract class (abstract class CsvFileReader + class MatchResult)
      [ ] Non-reusable CsvFileReader(csv file diffrent format) ->  
 * [ ] Variable named after a specific team
 * [ ] Analysis type is fixed
 * [ ] No ability to output the report in diffrent formats
 */

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log({ manUnitedWins });
