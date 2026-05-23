import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "./Tab";
import { tuaFlorBody } from "../test/stubs/tua-flor";

const meta = {
	title: "React/Tab",
	component: Tab,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		body: tuaFlorBody,
	},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
