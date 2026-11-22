"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};
const field = "rounded border border-neutral-300 px-3 py-2";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculate = async (op = operation) => {
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    if (!response.ok) {
      setResult(null);
      setError(data.error ?? `HTTP ${response.status}`);
      return;
    }
    setError(null);
    setResult(data.result);
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <label>
          A:{" "}
          <input id="wd-calculator-a" type="number" className={field}
            value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label>
          B:{" "}
          <input id="wd-calculator-b" type="number" className={field}
            value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <label>
          Operation:{" "}
          <select
            id="wd-calculator-operation"
            className={field}
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
              calculate(e.target.value);
            }}
          >
            {Object.entries(SYMBOLS).map(([op, symbol]) => (
              <option key={op} value={op}>
                {symbol}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          id="wd-calculator-calculate"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}
        >
          Calculate
        </button>
      </div>
      {error ? (
        <p id="wd-calculator-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      ) : (
        result !== null && (
          <p id="wd-calculator-result">
            {a} {SYMBOLS[operation]} {b} = <b>{result}</b>
          </p>
        )
      )}
      <hr />
    </div>
  );
}
