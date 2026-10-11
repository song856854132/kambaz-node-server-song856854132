import './index.css';
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from './Borders';
import BoxModel from './BoxModel';
import Padding from "./Padding";
import Margins from "./Marggings";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This paragraph demonstrates a purple background with white text.
      </p>
      <h3>Styling with CSS Style Attribute</h3>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">
        Instead of changing the look and feel of all the
        elements of the same name, e.g., P, we can refer to a
        specific element by its ID
      </p>
      <p id="wd-id-selector-2">
        Here&apos;s another paragraph using a different ID and a
        different look and feel
      </p>
      <p id="wd-ai-id-selector">
        This paragraph demonstrates a separate ID selector style.
      </p>
      <p id="wd-id-selector-3">
        This is a third paragraph using yet another ID and a different look and feel
      </p>
      <h3>Class selectors</h3>
      <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an
        element&apos;s CLASS attribute
      </p>
      <h4 className="wd-class-selector">
        This heading has same style as paragraph above
      </h4>
      <p className="wd-ai-class-selector">
        This paragraph demonstrates a reusable class selector style.
      </p>
      <h4 className="wd-ai-class-selector">
        This heading shares the reusable class selector style.
      </h4>
      <p className="wd-your-class">
        This paragraph demonstrates a different class selector style.
      </p>
      <h4 className="wd-your-class">
        This heading has same style as paragraph above
      </h4>
      <h3>Document structure selectors</h3>
      <div className="wd-selector-2">
        Selectors can be combined to refer elements in particular
        places in the document
        <p className="wd-selector-3">
          This paragraph&apos;s red background is referenced as
          <br />
          .selector-2 .selector3
          <br />
          meaning the descendant of some ancestor.
          <br />
          <span className="wd-selector-4">
            Whereas this span is a direct child of its parent
          </span>
          <br />
          You can combine these relationships to create specific
          styles depending on the document structure
          <br />
          <span className="wd-your-selector-5">
            This is extend span inside the paragraph.
          </span>
          <br />
          <span className="wd-selector-1">
            <span className="wd-ai-selector-5">
              This span demonstrates a descendant selector style.
            </span>
          </span>
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}