"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const field = "rounded border border-neutral-300 px-3 py-2";
const button = "rounded bg-blue-600 px-3 py-2 text-white no-underline";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <div className="mb-2 flex gap-2">
        <input id="wd-path-parameter-a" type="number" className={field}
          value={a} onChange={(e) => setA(e.target.value)} />
        <input id="wd-path-parameter-b" type="number" className={field}
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="flex flex-wrap gap-2">
        <a id="wd-path-parameter-add" className={button}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-path-parameter-subtract" className={button}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-path-parameter-multiply" className={button}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} * {b}
        </a>
        <a id="wd-path-parameter-divide" className={button}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} / {b}
        </a>
      </div>
      <div className="mt-2">
        <p>Click the buttons above to see the results of the operations.</p>
      </div>
      <hr />
    </div>
  );
}
