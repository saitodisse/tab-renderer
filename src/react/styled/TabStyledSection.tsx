import type { ReactNode } from "react";
import { nodeIsNoLyricsLine } from "./buildTabNodes";

export type TabStyledSectionProps = {
  title: string | null;
  nodes: ReactNode[];
  index: number;
  fontSize: number;
  lineHeight: number;
};

export function TabStyledSection({
  title,
  nodes,
  index,
  fontSize,
  lineHeight,
}: TabStyledSectionProps) {
  let isLastLineNoLyrics = false;
  if (nodes.length > 0) {
    isLastLineNoLyrics = nodeIsNoLyricsLine(nodes[nodes.length - 1]);
  }

  const scaleFactor = lineHeight * 0.55 + 0.03;

  return (
    <div className="tab-styled-section" data-tab-section={index}>
      {title ? <h2 className="tab-styled-section-title">{title}</h2> : null}
      <div
        className="tab-styled-section-body"
        style={{
          marginBottom: isLastLineNoLyrics ? `-${fontSize * 0.9}rem` : "0",
          display: "inline-block",
          width: "100%",
        }}
      >
        {nodes.map((item, nodeIndex) => {
          const isNoLyricsLine = nodeIsNoLyricsLine(item);
          const customLineHeight = isNoLyricsLine
            ? `${fontSize * scaleFactor}rem`
            : `${fontSize * lineHeight}rem`;

          return (
            <span key={nodeIndex}>
              <span
                style={{
                  position: "relative",
                  lineHeight: customLineHeight,
                }}
              >
                {item}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
