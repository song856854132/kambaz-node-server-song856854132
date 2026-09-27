import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Lab 1</h1>
      <h2>Lab 1</h2>
      <h3>Lab 1</h3>
        <div id="wd-your-heading">
          <h4>I'll give you my heading, but I won't give you my body</h4>
          <p>Body: {""}
            <span id="wd-your-span">I'm not your body</span>
          </p>
        </div>
      <h5>Lab 1</h5>
      <h6>Lab 1</h6>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraph />
      <HighlightedBox />
      <AnchorTag />
    </div>
  );
}
