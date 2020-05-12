import fs from "fs";

const matchs = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

console.log(matchs);

let manUnitedWins = 0;

for (let match of matchs) {
}
