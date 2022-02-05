import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

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
 * [x] Variable named after a specific team -> WinsAnalysis
 * [x] Analysis type is fixed & No ability to output the report in diffrent formats -> HtmlReport
 */

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
