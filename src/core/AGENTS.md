# Core Pipeline

The core is the framework-agnostic heart of the library.

## Responsibilities

- Parse raw `body` text into sections.
- Normalize the content into the public AST.
- Emit explicit token types:
  - `ChordToken`
  - `LyricToken`
  - `SpaceToken`
- Keep the result stable and predictable for downstream renderers.

## Constraints

- No React imports.
- No DOM assumptions.
- No layout measurement or rendering hints.
- Prefer pure functions and small transformation steps.

## Testing

- Add or update tests in `src/core/__tests__/`.
- Use the shared fixture body when possible so the core stays aligned with the public demo.
- Validate token shape, section shape, and normalization behavior, not implementation details.

