import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");
csvFileReader.read();
console.log(csvFileReader.data[0]);

// 맨유가 승리한 횟수를 출력
const ManU = "Man United";
let manUnitedWins = 0;

csvFileReader.data.forEach((match) => {
  const home = match[1];
  const away = match[2];
  const matchResult = match[5];

  if (
    (home === ManU && matchResult === MatchResult.HomeWin) ||
    (away === ManU && matchResult === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
});

console.log({ manUnitedWins });

/** Issues
 * [x] Magic string comparisons -> enum
 * [x] Source of data is hardcoded -> CsvFileReader
 * [x] Data array is all strings, even though it might have numbers in it -> fix CsvFileReader
      [ ] Non-reusable CsvFileReader(csv file diffrent format) -> using inheritance (abstract class CsvFileReader + class MatchResult)
      [ ] Non-reusable CsvFileReader(csv file diffrent format) -> using composition (class CsvFileReader + class MatchReader)
 * [ ] Variable named after a specific team -> WinsAnalysis
 * [ ] Analysis type is fixed & No ability to output the report in diffrent formats -> HtmlReport
 */
