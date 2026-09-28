import type { ReactNode } from "react";

function HighlightedBox({
  children,
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.5rem 0.75rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox>
        <h4>Nested content</h4>
        <p>
          A box can wrap any <b>nested</b> tags, passed in as <i>children</i>.
        </p>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="lightblue"
        borderColor="navy"
        borderWidth={4}
        borderRadius={16}
      >
        <h4>Same props, different colors</h4>
        <p>The style props work exactly like HighlightedParagraph.</p>
      </HighlightedBox>

      {/* On your own: my goals list */}
      <HighlightedBox
        backgroundColor="lightgreen"
        borderColor="darkgreen"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>My goals</h4>
        <ul id="wd-my-goals">
          <li>Finish CS5610 with a deployed full-stack Kambaz app</li>
          <li>Land a software engineering co-op</li>
          <li>Only get stronger so that I have the freedom to choose</li>
        </ul>
      </HighlightedBox>

      {/* With AI: sample box of nested tags */}
      <HighlightedBox
        backgroundColor="#fff0f5"
        borderColor="mediumvioletred"
        borderWidth="3px"
        borderRadius="0px"
      >
        <h5>HTML building blocks</h5>
        <p>
          Documents nest <code>block</code> and <code>inline</code> elements:
        </p>
        <ol>
          <li>
            Headings: <b>h1</b> to <b>h6</b>
          </li>
          <li>
            Lists: <i>ul</i>, <i>ol</i> and <i>li</i>
          </li>
          <li>
            Tables: <u>table</u>, <u>tr</u> and <u>td</u>
          </li>
        </ol>
      </HighlightedBox>
    </div>
  );
}
