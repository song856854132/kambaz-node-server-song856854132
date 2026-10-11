export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph is blue with{" "}
        <span className="wd-fg-color-black">black text inside</span>.
      </p>
      <br />
      <p className="wd-fg-color-gray">
        This text is gray.
        <span className="wd-fg-color-black">Just like my life.</span>
      </p>
    </div>
  );
}