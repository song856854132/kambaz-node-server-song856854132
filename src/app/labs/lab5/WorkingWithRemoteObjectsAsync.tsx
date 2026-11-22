"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};
const field = "rounded border border-neutral-300 px-3 py-2";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Assignment>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => {
    fetchAssignment().catch(() => setAssignment({}));
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <input
          id="wd-async-assignment-title"
          className={field}
          value={assignment.title ?? ""}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            id="wd-async-assignment-completed"
            checked={assignment.completed ?? false}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          Completed
        </label>
        <button
          type="button"
          id="wd-async-update-title"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={updateTitle}
        >
          Update Title
        </button>
      </div>
      <pre className="rounded bg-neutral-100 p-2 text-sm">
        {JSON.stringify(assignment, null, 2)}
      </pre>
      <hr />
    </div>
  );
}
