import { useEffect, useState } from "react";
import { useDialKit, DialRoot } from "dialkit";
import { Tab } from "./react";
import { tuaFlorBody } from "./test/stubs/tua-flor";
import { StoryPanel } from "./react/stories/story-ui";
import {
  stylingDialkitConfig,
  TAB_STYLING_PANEL_NAME,
  handleStylingPresetAction,
  stylingDialToTabStyle,
  type AppPageTheme,
} from "./demo/styling-dialkit";
import {
  CORE_USAGE_SNIPPET,
  GITHUB_URL,
  INSTALL_SNIPPET,
  LIB_LICENSE,
  LIB_NAME,
  LIB_VERSION,
  NPM_URL,
  REACT_USAGE_SNIPPET,
} from "./demo/site-meta";
import "./react/stories/stories.css";
import "./App.css";

function App() {
  const [pageTheme, setPageTheme] = useState<AppPageTheme>("light");

  useEffect(() => {
    document.documentElement.dataset.appTheme = pageTheme;
  }, [pageTheme]);

  const dial = useDialKit(TAB_STYLING_PANEL_NAME, stylingDialkitConfig, {
    onAction: (path) => {
      const theme = handleStylingPresetAction(path);
      if (theme) setPageTheme(theme);
    },
  });
  const style = stylingDialToTabStyle(dial);

  return (
    <div className="app-layout">
      <main className="app-shell">
        <header className="app-header">
          <div className="lib-hero-meta">
            <p className="eyebrow">{LIB_NAME}</p>
            <p className="lib-badge">
              v{LIB_VERSION} · {LIB_LICENSE}
            </p>
          </div>
          <h1>Open-source chord sheet parsing and rendering</h1>
          <p className="lede">
            {LIB_NAME} ships a headless core for parsing, transposition, and
            interleaved bar preparation, plus a React adapter with a styled{" "}
            <code>Tab</code> viewer and composable primitives for custom
            layouts. The live demo below uses the shared{" "}
            <code>tua-flor.txt</code> fixture — tweak every{" "}
            <code>TabStyleConfig</code> control in the panel on the right.
          </p>

          <div className="lib-actions">
            <a
              className="lib-button lib-button-primary"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <a
              className="lib-button"
              href={NPM_URL}
              target="_blank"
              rel="noreferrer"
            >
              npm package
            </a>
          </div>

          <div className="lib-docs">
            <section className="lib-doc-block">
              <h2>Install</h2>
              <p>
                Peer dependencies: <code>react</code> and <code>react-dom</code>{" "}
                (^18 or ^19).
              </p>
              <pre className="lib-code">
                <code>{INSTALL_SNIPPET}</code>
              </pre>
            </section>

            <section className="lib-doc-block">
              <h2>React usage</h2>
              <p>
                Import from <code>tab-renderer/react</code> for the styled
                viewer.
              </p>
              <pre className="lib-code">
                <code>{REACT_USAGE_SNIPPET}</code>
              </pre>
            </section>

            <section className="lib-doc-block">
              <h2>Headless core</h2>
              <p>
                Import from <code>tab-renderer</code> when you only need the
                prepared bar list or token AST.
              </p>
              <pre className="lib-code">
                <code>{CORE_USAGE_SNIPPET}</code>
              </pre>
            </section>
          </div>
        </header>

        <section className="demo-panel" aria-label="Live demo">
          <div className="tab-story-frame">
            <StoryPanel caption="Live preview — interleaved pipeline, CSS chord offsets, and viewer preferences.">
              <Tab body={tuaFlorBody} style={style} className="tab-demo-1" />
            </StoryPanel>
          </div>
        </section>
      </main>

      <aside className="app-controls" aria-label="Style controls">
        <DialRoot
          mode="inline"
          defaultOpen
          theme={pageTheme}
          productionEnabled
        />
      </aside>
    </div>
  );
}

export default App;
