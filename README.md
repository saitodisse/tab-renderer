# tab-renderer

Open-source chord sheet rendering library with:

- a headless core for parsing and normalizing raw `body` text
- a React adapter with composable primitives and a convenience `Tab` wrapper
- Vite as the build tool
- Storybook for isolated UI development
- Vitest for TDD

## Install

```bash
npm install tab-renderer
```

Or install directly from git:

```bash
npm install github:saitodisse/tab-renderer
```

## Core usage

```ts
import { transform } from "tab-renderer";

const song = transform(body);
```

The core returns a normalized AST:

- `Song`
- `Section[]`
- `Line[]`
- `Token[]`

Tokens are explicit:

- `ChordToken`
- `LyricToken`
- `SpaceToken`

## React usage

```tsx
import { Tab } from "tab-renderer/react";
import { tuaFlorBody } from "./src/test/stubs/tua-flor";

export function Example() {
  return <Tab body={tuaFlorBody} />;
}
```

The React entrypoint also exports primitives:

- `Tab.Root`
- `Tab.Section`
- `Tab.Line`
- `Tab.Chord`
- `Tab.Lyric`

## Local development

```bash
npm install
npm run dev
npm run storybook
npm test
npm run build
```

## Documentation

- `docs/prd/0001-tab-renderer-library.md`
- `docs/rfc/0001-package-structure-and-public-api.md`
- `docs/plans/2026-05-23-bootstrap-and-core-slice.md`

