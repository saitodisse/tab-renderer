import type {
  ParseDiagnostic,
  ParseDiagnosticSeverity,
  ParsedChordSymbol,
  ParsedTab as DomainParsedTab,
  ParsedTabLine,
  ParsedTabLineKind,
  ParsedTabSection,
  ParsedTabToken,
  ParsedTabTokenKind,
} from "achorde-musical-domain";

export type {
  ParseDiagnostic,
  ParseDiagnosticSeverity,
  ParsedChordSymbol,
  ParsedTabLine,
  ParsedTabLineKind,
  ParsedTabSection,
  ParsedTabToken,
  ParsedTabTokenKind,
} from "achorde-musical-domain";

export type ParsedTab = DomainParsedTab & {
  chordsFound: ReadonlyArray<string>;
};
