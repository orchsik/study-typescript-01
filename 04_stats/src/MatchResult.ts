/** enum - enumeration
 * Follow near-identical syntax rules as normal objects
 * Creates an object with the same keys and values when converted from TS to JS
 * Primary goal is to signal to other engineers that these are all closely related values
 * Use whenever we have small fixed set of values that are all closely related and known at complie time
 */
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
