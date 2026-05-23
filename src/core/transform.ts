import type { Line, Song, Token } from "./types";

const CHORD_RE =
	/^(?:\/|[A-G](?:#|b)?(?:maj7|m7|m|7|dim|aug|sus2|sus4|add9|6|9|11|13)?(?:\([^)]+\))?(?:\/[A-G](?:#|b)?)?)$/;

function createToken(
	kind: Token["kind"],
	text: string,
	start: number,
	end: number,
): Token {
	return { kind, text, start, end } as Token;
}

function tokenizeLine(text: string): Token[] {
	const tokens: Token[] = [];
	const pattern = /\s+|[^\s]+/g;
	for (const match of text.matchAll(pattern)) {
		const segment = match[0];
		const start = match.index ?? 0;
		const end = start + segment.length;

		if (/^\s+$/.test(segment)) {
			tokens.push(createToken("SpaceToken", segment, start, end));
			continue;
		}

		const kind = CHORD_RE.test(segment) ? "ChordToken" : "LyricToken";
		tokens.push(createToken(kind, segment, start, end));
	}

	return tokens;
}

function parseSections(body: string): Song["sections"] {
	const sections: Song["sections"] = [];
	let currentSection = { title: null as string | null, lines: [] as Line[] };

	const flush = () => {
		if (currentSection.lines.length > 0 || currentSection.title) {
			sections.push(currentSection);
		}
		currentSection = { title: null, lines: [] };
	};

	for (const rawLine of body.split(/\r?\n/)) {
		const header = rawLine.match(/^\s*\[([^[\]]+)\]\s*$/);
		if (header) {
			flush();
			currentSection.title = header[1].trim();
			continue;
		}

		if (!currentSection.title && currentSection.lines.length === 0 && rawLine.trim() === "") {
			continue;
		}

		currentSection.lines.push({
			text: rawLine,
			tokens: tokenizeLine(rawLine),
		});
	}

	flush();
	return sections;
}

export function transform(body: string): Song {
	return {
		body,
		sections: body.trim() ? parseSections(body) : [],
	};
}
