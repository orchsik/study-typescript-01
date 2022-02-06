import fs from "fs";

/** csv info
[0] 12/08/2018 - 경기일자
[1] Arsenal - 홈팀
[2] Man City - 어웨이팀
[3] 0 - 홈득점
[4] 2 - 어웨이득점
[5] A - 매치결과
[6] M Oliver - MVP
 */

// 맨유가 승리한 횟수를 출력
const data: string[][] = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row) => row.split(","));

const ManU = "Man United";
let manUnitedWins = 0;
data.forEach((match) => {
  const home = match[1];
  const away = match[2];
  const matchResult = match[5];
  if (
    (home === ManU && matchResult === "H") ||
    (away === ManU && matchResult === "A")
  ) {
    manUnitedWins++;
  }
});

console.log({ manUnitedWins });

/** Issues
 * [ ] Magic string comparisons -> enum
 * [ ] Source of data is hardcoded -> CsvFileReader
 * [ ] Data array is all strings, even though it might have numbers in it -> fix CsvFileReader
      [ ] Non-reusable CsvFileReader(csv file diffrent format) -> using inheritance (abstract class CsvFileReader + class MatchResult)
      [ ] Non-reusable CsvFileReader(csv file diffrent format) -> using composition (class CsvFileReader + class MatchReader)
 * [ ] Variable named after a specific team -> WinsAnalysis
 * [ ] Analysis type is fixed & No ability to output the report in diffrent formats -> HtmlReport
 */
