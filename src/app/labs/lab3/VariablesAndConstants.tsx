export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  var x = 10;
  let y = 20;
  const z = x + y;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}
      <hr />
      x = {x} <br />
      y = {y} <br />
      x + y = {z}
      <br />
      sampleSum = {sampleSum}
    </div>
  );
}