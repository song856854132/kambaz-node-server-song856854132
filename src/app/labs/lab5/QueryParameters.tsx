"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const field = "rounded border border-neutral-300 px-3 py-2";
const button = "rounded bg-blue-600 px-3 py-2 text-white no-underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <div className="mb-2 flex gap-2">
        <input id="wd-query-parameter-a" type="number" className={field}
          value={a} onChange={(e) => setA(e.target.value)} />
        <input id="wd-query-parameter-b" type="number" className={field}
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="flex flex-wrap gap-2">
        <a id="wd-query-parameter-add" className={button}
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-query-parameter-subtract" className={button}
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-query-parameter-multiply" className={button}
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} * {b}
        </a>
        <a id="wd-query-parameter-divide" className={button}
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
