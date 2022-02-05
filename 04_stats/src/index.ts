import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

/**
 * [ Issues ]
 * Magic string comparisions
 * Source of data is hardcoded
 * Data array is all strings, even though it might have numbers in it
 * Variable named after a specific team
 * Analysis type is fixed
 * No ability to output the report in diffrent formats
 */

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
