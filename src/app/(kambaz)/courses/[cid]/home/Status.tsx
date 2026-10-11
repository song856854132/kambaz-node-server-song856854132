import type { ReactNode } from "react";
import {
  FaBell,
  FaBullhorn,
  FaCheckCircle,
  FaChartBar,
  FaFileImport,
  FaHome,
  FaStream,
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BiImport } from "react-icons/bi";
import { MdDoNotDisturbAlt } from "react-icons/md";

function StatusButton({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <button
      id={id}
      type="button"
      className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
    >
      {children}
    </button>
  );
}

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <StatusButton>
        <BiImport className="me-2 shrink-0 text-base" /> Import Existing Content
      </StatusButton>
      <StatusButton>
        <FaFileImport className="me-2 shrink-0 text-base" /> Import from Commons
      </StatusButton>
      <StatusButton>
        <FaHome className="me-2 shrink-0 text-base" /> Choose Home Page
      </StatusButton>
      <StatusButton>
        <FaStream className="me-2 shrink-0 text-base" /> View Course Stream
      </StatusButton>
      <StatusButton>
        <FaBullhorn className="me-2 shrink-0 text-base" /> New Announcement
      </StatusButton>
      <StatusButton>
        <FaChartBar className="me-2 shrink-0 text-base" /> New Analytics
      </StatusButton>
      <StatusButton>
        <FaBell className="me-2 shrink-0 text-base" /> View Course Notifications
      </StatusButton>
      <StatusButton id="wd-ai-status">
        <FaWandMagicSparkles className="me-2 shrink-0 text-base" /> Sample action
      </StatusButton>
    </div>
  );
}
