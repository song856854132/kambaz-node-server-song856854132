"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    { id: "wd-course-home-link", label: "Home", path: "home" },
    { id: "wd-course-modules-link", label: "Modules", path: "modules" },
    { id: "wd-course-piazza-link", label: "Piazza", path: "piazza" },
    { id: "wd-course-zoom-link", label: "Zoom", path: "zoom" },
    { id: "wd-course-assignments-link", label: "Assignments", path: "assignments" },
    { id: "wd-course-quizzes-link", label: "Quizzes", path: "quizzes" },
    { id: "wd-course-grades-link", label: "Grades", path: "grades" },
    { id: "wd-course-people-link", label: "People", path: "people", href: "people/table" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ id, label, path, href }) => {
        const base = `/courses/${cid}/${path}`;
        // Nested paths count as active too, e.g. /assignments/123 lights up Assignments
        const active = pathname === base || pathname.startsWith(base + "/");
        return (
          <Link
            key={id}
            href={`/courses/${cid}/${href ?? path}`}
            id={id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
