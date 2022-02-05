import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' inerface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

/** Issues
 * [x] Magic string comparisons -> enum
 * [x] Source of data is hardcoded -> CsvFileReader
 * [x] Data array is all strings, even though it might have numbers in it -> fix CsvFileReader
      [x] Non-reusable CsvFileReader(csv file diffrent format) -> using inheritance (abstract class CsvFileReader + class MatchResult)
      [x] Non-reusable CsvFileReader(csv file diffrent format) -> using composition (class CsvFileReader + class MatchReader)
 * [ ] Variable named after a specific team
 * [ ] Analysis type is fixed
 * [ ] No ability to output the report in diffrent formats
 */

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log({ manUnitedWins });
