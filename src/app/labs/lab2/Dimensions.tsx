export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* On your own: a wide, short banner that keeps its size */}
        <div className="wd-dimension-banner wd-bg-color-green wd-fg-color-white">
          Banner
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box declares a width of 120px and a height of 60px, so
          this long sentence spills out instead of stretching the box.
        </div>
      </div>
    </div>
  );
}