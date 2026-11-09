"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
} from "../../../../store/assignmentsStore";

const label = "mb-1 block text-sm font-medium";
const field = "w-full rounded border border-neutral-300 px-3 py-2 font-sans";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  // /assignments/new opens a blank draft; any other aid edits that row
  const isNew = assignmentId === "new";
  const [draft, setDraft] = useState(
    existing ?? { ...emptyAssignment, _id: assignmentId, course: courseId },
  );
  const listUrl = `/courses/${courseId}/assignments`;
  const save = () => {
    if (isNew) {
      addAssignment({ ...draft, course: courseId });
    } else {
      updateAssignment(draft);
    }
    router.push(listUrl);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className={field}
        />
        <p id="wd-assignment-id" className="mt-1 text-sm text-neutral-600">
          Assignment id: {isNew ? "(new)" : assignmentId}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          className={field}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={draft.points}
          onChange={(e) => setDraft({ ...draft, points: Number(e.target.value) })}
          className={field}
        />
      </div>
      {/* Complete on your own — see checklist below */}
      <div className="mb-4">
        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-submission-type" className={label}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={field}>
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
            <option value="EXTERNAL">External Tool</option>
          </select>
          <div className="mt-3 mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" />
              Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked />
              Website URL
            </label>
            <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" />
              Media Recordings
            </label>
            <label htmlFor="wd-student-annotation" className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" />
              Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" />
              File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className={label}>Assign</div>
        <div className="rounded border border-neutral-300 p-3">
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className={label}>
              Assign to
            </label>
            <input id="wd-assign-to" defaultValue="Everyone" className={field} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-due-date" className={label}>
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={draft.due}
              onChange={(e) => setDraft({ ...draft, due: e.target.value })}
              className={field}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className={label}>
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={draft.available}
                onChange={(e) => setDraft({ ...draft, available: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={label}>
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={draft.until ?? draft.due}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
                className={field}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={listUrl}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
