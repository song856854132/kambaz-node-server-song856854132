export default function BooleanVariables() {
  let numberVariable = 123,
    floatingPointNumber = 234.345;
  let true1 = true,
    false1 = false;
  let myString1 = "AI is going to kick my ass",
    myString2 = "AI is going to kick my ass";
  let false2 = true1 && false1;
  let true2 = true1 || false1;
  let true3 = !false2;
  let true4 = numberVariable === 123;
  let true5 = floatingPointNumber !== 321.432;
  let false3 = numberVariable < 100;
  let true6 = myString1 === myString2;
  let true7 = (123 as unknown) == "123"; // loose equality: TS rejects number == string, so widen to unknown
  const true8 = numberVariable !== 0;
  return (
    <div id="wd-boolean-variables">
      <h4>Boolean Variables</h4>
      true1 = {true1 + ""}   <br />
      false1 = {false1 + ""} <br />
      false2 = {false2 + ""} <br />
      true2 = {true2 + ""}   <br />
      true3 = {true3 + ""}   <br />
      true4 = {true4 + ""}   <br />
      true5 = {true5 + ""}   <br />
      false3 = {false3 + ""} <br />
      true6 = {true6 + ""}   <br />
      true7 = {true7 + ""}   <br />
      true8 = {true8 + ""}   <br />
      <hr />
    </div>
  );
}