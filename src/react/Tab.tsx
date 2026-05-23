/* eslint-disable react-refresh/only-export-components */
import { transform } from "../core";
import { TabRoot } from "./TabRoot";
import { TabSection } from "./TabSection";
import type { TabProps } from "./types";

function TabComponent({ body, className }: TabProps) {
	const song = transform(body);

	return (
		<TabRoot song={song} className={className}>
			{song.sections.map((section, index) => (
				<TabSection key={index} section={section} index={index} />
			))}
		</TabRoot>
	);
}

export const Tab = Object.assign(TabComponent, {
	Root: TabRoot,
	Section: TabSection,
});
