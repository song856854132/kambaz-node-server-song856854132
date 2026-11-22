"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const field = "rounded border border-neutral-300 px-3 py-2";
const button = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
const row = "mb-2 flex flex-wrap items-center gap-2";

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Build an HTTP server with Express and test it from React",
    course: "CS5610",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={button}
        href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={button}
        href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <div className={row}>
        <input id="wd-assignment-title" className={field}
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        <a id="wd-update-assignment-title" className={button}
          href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
          Update Title
        </a>
      </div>
      <div className={row}>
        <input id="wd-assignment-score" type="number" className={field}
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })} />
        <a id="wd-update-assignment-score" className={button}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <div className={row}>
        <label htmlFor="wd-assignment-completed" className="flex items-center gap-2">
          <input id="wd-assignment-completed" type="checkbox"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
          Completed
        </label>
        <a id="wd-update-assignment-completed" className={button}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      <hr />
      <h4>Module (On Your Own)</h4>
      <div className={row}>
        <a id="wd-retrieve-module" className={button} href={MODULE_API_URL}>
          Get Module
        </a>
        <a id="wd-retrieve-module-name" className={button} href={`${MODULE_API_URL}/name`}>
          Get Module Name
        </a>
      </div>
      <div className={row}>
        <input id="wd-module-name" className={field}
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })} />
        <a id="wd-update-module-name" className={button}
          href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
          Update Module Name
        </a>
      </div>
      <div className={row}>
        <input id="wd-module-description" className={`${field} min-w-80`}
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })} />
        <a id="wd-update-module-description" className={button}
          href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}
