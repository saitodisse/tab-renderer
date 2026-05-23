import { Tab } from "./react";
import { tuaFlorBody } from "./test/stubs/tua-flor";
import "./App.css";

function App() {
	return (
		<main className="app-shell">
			<header className="app-header">
				<p className="eyebrow">tab-renderer</p>
				<h1>Core + React adapter for chord sheets</h1>
				<p className="lede">
					The demo below renders the shared <code>tua-flor.txt</code>{" "}
					fixture with the public React component.
				</p>
			</header>

			<section className="demo-panel">
				<Tab body={tuaFlorBody} />
			</section>
		</main>
	);
}

export default App;
