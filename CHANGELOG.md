# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] - 2026-05-23

### Added

- Bootstrapped a new open-source `tab-renderer` package from scratch with Vite.
- Added a headless core entrypoint that normalizes raw chord sheet `body` text into a minimal AST.
- Added a public React adapter entrypoint with `Tab`, `Tab.Root`, `Tab.Section`, `Tab.Line`, `Tab.Chord`, and `Tab.Lyric`.
- Added Storybook for isolated UI development and Storybook stories driven by the shared `tua-flor.txt` fixture.
- Added Vitest and Testing Library with TDD coverage for the core transformation path and the public React adapter.
- Added package exports for `.` and `./react` to support npm and git-based consumption.
- Added documentation artifacts in `docs/prd/`, `docs/rfc/`, and `docs/plans/`.
- Added a shared real-world fixture at `src/test/stubs/tua-flor.txt` and wired it into tests, stories, and the demo app.
- Added repository guidance files (`AGENTS.md`) for the root, docs, `src/`, `src/core/`, `src/react/`, and `src/test/`.

### Changed

- Replaced the default Vite starter app with a demo that renders the public React adapter.
- Reworked the generated Storybook scaffold to focus on the library surface instead of the starter template.
- Adjusted build and lint configuration so the repository behaves like a publishable package rather than a throwaway app.

