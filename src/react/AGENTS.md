# React Adapter

The React layer renders the normalized AST exposed by the core.

## Responsibilities

- Expose the public `Tab` convenience wrapper.
- Expose composable primitives:
  - `Tab.Root`
  - `Tab.Section`
  - `Tab.Line`
  - `Tab.Chord`
  - `Tab.Lyric`
- Keep the adapter headless by default so consumers can style it.

## Rules

- Import transformation logic from `src/core/`, never duplicate parsing.
- Keep the wrapper and the primitives aligned with the exported public API.
- Do not add app-specific styling assumptions or Vite template leftovers.
- If a module intentionally mixes component exports and wrapper composition, keep the exception narrowly scoped.

## Storybook

- `src/react/Tab.stories.tsx` is the canonical story for the package.
- Use the shared `tua-flor.txt` fixture for representative rendering examples.

## Testing

- Put adapter tests in `src/react/__tests__/`.
- Verify the adapter can render the real shared fixture.
- Cover the public behavior, not just the internal JSX shape.

