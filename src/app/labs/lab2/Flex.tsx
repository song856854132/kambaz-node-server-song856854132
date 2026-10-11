export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* On your own: the first column stretches, the last one is pinned at 150px */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Grows
        </div>
        <div className="wd-bg-color-yellow">Natural width</div>
        <div className="wd-bg-color-gray wd-width-150px">Fixed 150px</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Fixed</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
        <div className="wd-bg-color-purple wd-fg-color-white wd-flex-grow-1">
          Stretches
        </div>
      </div>
    </div>
  );
}
