export default function PassingFunctions({
  message,
  theFunction,
  sayMyName,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  sayMyName: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={sayMyName}
        id="wd-pass-functions-my-name-click"
        className="ms-2 rounded bg-blue-600 text-white px-3 py-1.5 text-sm font-medium"
      >
        Say My Name
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-neutral-600 text-white px-3 py-1.5 text-sm font-medium"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
