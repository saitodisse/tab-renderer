export type TokenKind = "ChordToken" | "LyricToken" | "SpaceToken";

type BaseToken = {
	kind: TokenKind;
	text: string;
	start: number;
	end: number;
};

export type ChordToken = BaseToken & {
	kind: "ChordToken";
};

export type LyricToken = BaseToken & {
	kind: "LyricToken";
};

export type SpaceToken = BaseToken & {
	kind: "SpaceToken";
};

export type Token = ChordToken | LyricToken | SpaceToken;

export type Line = {
	text: string;
	tokens: Token[];
};

export type Section = {
	title: string | null;
	lines: Line[];
};

export type Song = {
	body: string;
	sections: Section[];
};
