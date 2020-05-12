import fs from "fs";
import { dataStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
        return [
          dataStringToDate(row[0]),
          row[1],
          row[2],
          +row[3],
          +row[4],
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
