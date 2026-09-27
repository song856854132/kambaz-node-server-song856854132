import TextFields from "./forms/TextFields";
import TextArea from "./forms/TextArea";
import RadioButtons from "./forms/RadioButtons";
import Checkboxes from "./forms/Checkboxes";
import Dropdowns from "./forms/Dropdowns";
import OtherInputs from "./forms/OtherInputs";
import Buttons from "./forms/Buttons";
import YourForm from "./forms/YourForm";

export default function Forms() {
  return (
    <div id="wd-forms">
      <TextFields />
      <TextArea />
      <RadioButtons />
      <Checkboxes />
      <Dropdowns />
      <OtherInputs />
      <Buttons />
      <YourForm />
    </div>
  );
}
