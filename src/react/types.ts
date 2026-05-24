import type { Line, Section, Song, Token } from "../core";
import type { TabStyleConfig } from "../core/preparedTypes";
import type { ReactNode } from "react";

export type {
  TabStyleConfig,
  ViewMode,
  DisplayMode,
} from "../core/preparedTypes";

export type TabRootProps = {
  song: Song;
  children?: ReactNode;
  className?: string;
};

export type TabSectionProps = {
  section: Section;
  index: number;
  children?: ReactNode;
  className?: string;
};

export type TabLineProps = {
  line: Line;
  index: number;
  children?: ReactNode;
  className?: string;
};

export type TabTokenProps = {
  token: Token;
  className?: string;
};

export type TabProps = {
  body: string;
  className?: string;
  style?: Partial<TabStyleConfig>;
};
