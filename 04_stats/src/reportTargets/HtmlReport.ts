import fs from "fs";
import path from "path";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    console.log(report);
    fs.writeFileSync(path.join("build", "report.html"), html);
  }
}
