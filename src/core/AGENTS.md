# Core Pipeline

The core is the framework-agnostic heart of the library.

## Responsibilities

- **`prepareSong()`** — primary pipeline for the styled viewer: split sections → pair lines → extract chords → transpose → interleaved `barList`.
- **`transform()`** — legacy per-line token AST (`Song` → `Section` → `Line` → `ChordToken` / `LyricToken` / `SpaceToken`) for composable primitives and teaching stories.
- Export shared types: `PreparedSong`, `TabStyleConfig`, `DEFAULT_TAB_STYLE`, parser/transposer types.

## Layout

- `src/core/parser/` — `splitSections`, pairer, chord extractor
- `src/core/transposer/` — semitone transpose (`@tonaljs/tonal`), `chordToText`
- `src/core/renderer/` — `generateBarList`
- `src/core/prepareSong.ts` — orchestrator
- `src/core/transform.ts` — token AST

## Constraints

- No React imports.
- No DOM assumptions.
- Prefer pure functions and small transformation steps.

## Testing

- Tests in `src/core/__tests__/`.
- Use `src/test/stubs/tua-flor.txt` for integration-style coverage.
- Cover `prepareSong`, `generateBarList`, and `transform` behavior.
