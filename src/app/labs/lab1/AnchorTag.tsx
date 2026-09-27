export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      My often visited website is {" "}
      <a href="https://www.economist.com" id="wd-your-link">
        Economist
      </a>
      <br />
      My GitHub profile is {" "}
      <a href="https://github.com/song856854132" id="wd-your-github" target="_blank" rel="noopener noreferrer">
        Click to open new tab to visit my GitHub profile
      </a>
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link" target="_blank" rel="noopener noreferrer">
        MDN: table element
      </a>
      <br />
    </>
  );
}