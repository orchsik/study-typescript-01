import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  static fromCsv(filename: string) {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  /** row info
    [0] 12/08/2018 - 경기일자
    [1] Arsenal - 홈팀
    [2] Man City - 어웨이팀
    [3] 0 - 홈득점
    [4] 2 - 어웨이득점
    [5] A - 매치결과
    [6] M Oliver - MVP
  */
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
