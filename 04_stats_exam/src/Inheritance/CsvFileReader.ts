import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract handleRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync("football.csv", {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string) => row.split(","))
      .map(this.handleRow);
  }
}
