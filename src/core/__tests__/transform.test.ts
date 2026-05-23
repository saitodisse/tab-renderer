import { describe, expect, it } from "vitest";
import { transform } from "../transform";
import { tuaFlorBody } from "../../test/stubs/tua-flor";

describe("transform", () => {
	it("normalizes the tua flor body into a song AST with explicit tokens", () => {
		const result = transform(tuaFlorBody);

		expect(result.sections.length).toBeGreaterThan(0);
		expect(
			result.sections.some((section) =>
				section.lines.some((line) =>
					line.tokens.some((token) => token.kind === "ChordToken"),
				),
			),
		).toBe(true);
		expect(
			result.sections.some((section) =>
				section.lines.some((line) =>
					line.tokens.some((token) => token.kind === "LyricToken"),
				),
			),
		).toBe(true);
	});
});
