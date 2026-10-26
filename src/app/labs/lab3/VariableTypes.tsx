export default function VariableTypes() {
  let numberVariable = 123;
  let mynumber = 123456789;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let mystring = "AI is going to kick my ass";
  let booleanVariable = true;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isNumber = typeof numberVariable;
  let isMyNumber = typeof mynumber;
  let isString = typeof stringVariable;
  let isMyString = typeof mystring;
  let isBoolean = typeof booleanVariable;
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      mynumber = {mynumber}                       <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      mystring = {mystring}                       <br />
      sampleCount = {sampleCount}                 <br />
      sampleLabel = {sampleLabel}                 <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isMyNumber = {isMyNumber}                   <br />
      isString = {isString}                       <br />
      isMyString = {isMyString}                   <br />
      isBoolean = {isBoolean}                     <br />
      isSampleCount = {isSampleCount}             <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}