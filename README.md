# tab-renderer

Open-source chord sheet rendering library with:

- a headless core for parsing, transposition, and interleaved bar preparation
- a React adapter with a styled `Tab` viewer and composable primitives for custom layouts
- Vite as the build tool
- Storybook for isolated UI development
- Vitest for TDD

## Architecture

The package exposes two public entrypoints:

| Entrypoint           | Role          |
| -------------------- | ------------- |
| `tab-renderer`       | Headless core |
| `tab-renderer/react` | React adapter |

### Rendering model

**`Tab` (public viewer)** — production layout aligned with [Achordex](https://github.com/saitodisse/achordex):

- `prepareSong()` runs sections → pair → extract → transpose → interleaved `barList`
- Chords sit above lyrics via CSS (`position: relative`, `bottom`, negative `marginRight`) inside `white-space: pre-wrap`
- `Tab` accepts `style?: Partial<TabStyleConfig>` (typography, colors, `displayMode`, `viewMode`, transpose, margins)

**Token AST (headless + composable primitives)** — for custom UI or inspection:

- `transform()` → `Song` → `Section` → `Line` → `ChordToken` \| `LyricToken` \| `SpaceToken`
- Compose with `Tab.Root`, `Tab.Section`, `Tab.Line`, `Tab.Chord`, `Tab.Lyric` (not used by `Tab` itself)

See [PRD 0002](./docs/prd/0002-styled-viewer-pipeline.md) and [RFC 0002](./docs/rfc/0002-interleaved-bars-and-tab-style-config.md).

Repository guidance: [`AGENTS.md`](./AGENTS.md), [`docs/AGENTS.md`](./docs/AGENTS.md), [`src/AGENTS.md`](./src/AGENTS.md).

## Install

```bash
npm install tab-renderer
```

Or from git:

```bash
npm install github:saitodisse/tab-renderer
```

Peer dependencies: `react` and `react-dom` (^18 or ^19).

## Core usage

### Styled pipeline (interleaved bars)

```ts
import { prepareSong } from "tab-renderer";

const prepared = prepareSong({
  body,
  transposeNumber: 0,
  viewMode: "e", // "o" = original (compact), "e" = extended
  beat: 4,
});
// prepared.sections[].barList — lyric fragments + chord items for render
```

### Token AST (per-line tokens)

```ts
import { transform } from "tab-renderer";

const song = transform(body);
// song.sections[].lines[].tokens
```

Exported types include `PreparedSong`, `TabStyleConfig`, `DEFAULT_TAB_STYLE`, `BarsListItem`, and legacy `Song` / `Token` types.

## React usage

### Styled `Tab` (default)

```tsx
import { Tab, DEFAULT_TAB_STYLE } from "tab-renderer/react";

export function Example() {
  return (
    <Tab
      body={body}
      style={{
        ...DEFAULT_TAB_STYLE,
        fontSize: 21,
        displayMode: "both",
        viewMode: "e",
        transposeNumber: 0,
      }}
    />
  );
}
```

### Composable primitives (token AST)

```tsx
import { transform } from "tab-renderer";
import { Tab } from "tab-renderer/react";

const song = transform(body);

<Tab.Root song={song}>
  {song.sections.map((section, i) => (
    <Tab.Section key={i} section={section} index={i} />
  ))}
</Tab.Root>;
```

Also exported: `Tab.Line`, `Tab.Chord`, `Tab.Lyric`.

### `TabStyleConfig`

| Field                                         | Purpose                                      |
| --------------------------------------------- | -------------------------------------------- |
| `transposeNumber`                             | Semitone shift (core transposer)             |
| `fontSize`, `lineHeight`                      | Container typography                         |
| `chordHeight`, `blockMarginRight`             | Chord offset above lyrics                    |
| `contentMarginRightPx`                        | Container `margin-right` (200–1000 when set) |
| `viewMode`                                    | `"o"` original \| `"e"` extended bar spacing |
| `displayMode`                                 | `"chords"` \| `"lyrics"` \| `"both"`         |
| `chordColor`, `lyricColor`, `backgroundColor` | Colors                                       |

`scrollSpeed` is intentionally **not** part of this package (app-level fullscreen viewer).

## Storybook

```bash
npm run storybook
```

Teaching trail (sidebar):

| Group                | Content                                                                               |
| -------------------- | ------------------------------------------------------------------------------------- |
| `01 Core` … `06 Tab` | `tua-flor` fixture — raw body → AST → tokens → lines → sections → composition → `Tab` |
| `07 Styling`         | Full `TabStyleConfig` controls on `tua-flor`                                          |

Use the **Theme** toolbar (Light / Dark) for readable preview frames.

## Local development

```bash
npm install
npm run dev
npm run storybook
npm test
npm run lint
npm run build
npm run build-storybook
```

## Documentation

- [docs/README.md](./docs/README.md) — index

**v0.1 bootstrap:**

- [PRD 0001](./docs/prd/0001-tab-renderer-library.md)
- [RFC 0001](./docs/rfc/0001-package-structure-and-public-api.md)
- [Plan — Bootstrap](./docs/plans/2026-05-23-bootstrap-and-core-slice.md)

**v0.2 styled viewer (shipped):**

- [PRD 0002](./docs/prd/0002-styled-viewer-pipeline.md)
- [RFC 0002](./docs/rfc/0002-interleaved-bars-and-tab-style-config.md)
- [Plan — Styled viewer](./docs/plans/2026-05-23-styled-viewer-pipeline-and-stories.md)

## Repository layout

- `src/core/` — headless parser, transposer, `prepareSong`, legacy `transform`
- `src/react/` — styled `Tab`, primitives, Storybook stories
- `src/test/stubs/tua-flor.txt` — shared fixture for tests and stories
- `src/stories/` — stock Vite Storybook template (not library API)
