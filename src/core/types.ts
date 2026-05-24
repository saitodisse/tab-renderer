export type ParseDiagnosticSeverity = "info" | "warning" | "error";

export type ParseDiagnostic = {
  code: string;
  message: string;
  severity: ParseDiagnosticSeverity;
  line?: number;
  column?: number;
  sourceRange?: {
    startColumn: number;
    endColumn: number;
  };
};

export type ParsedChordSymbol =
  | {
      kind: "repeat";
      text: "/";
    }
  | {
      kind: "chord";
      text: string;
      root: string;
      suffix: string;
      bass?: string;
    };

export type ParsedTabTokenKind = "ChordToken" | "LyricToken" | "SpaceToken";

export type ParsedTabToken = {
  kind: ParsedTabTokenKind;
  text: string;
  startColumn: number;
  endColumn: number;
  chord?: ParsedChordSymbol;
};

export type ParsedTabLineKind =
  | "lyrics"
  | "chords"
  | "mixed"
  | "tablature"
  | "comment"
  | "blank"
  | "unknown";

export type ParsedTabLine = {
  id: string;
  order: number;
  text: string;
  kind: ParsedTabLineKind;
  tokens: ParsedTabToken[];
};

export type ParsedTabSection = {
  id: string;
  order: number;
  title: string | null;
  originalTitle: string | null;
  lines: ParsedTabLine[];
};

export type ParsedTab = {
  body: string;
  sections: ParsedTabSection[];
  diagnostics: ParseDiagnostic[];
  parserVersion: string;
  astVersion: string;
};
