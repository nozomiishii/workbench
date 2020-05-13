import { MatchData } from "./MatchData";

export interface Analyzer {
  run(marches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
