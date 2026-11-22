"use client";
import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import { useCoursesStore, type Course } from "../../store/coursesStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const course = courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const router = useRouter();
  // null while checking; signed-out visitors may open every course
  const [allowed, setAllowed] = useState<boolean | null>(currentUser ? null : true);
  // Opening a course URL directly: the store is empty until we ask the server
  useEffect(() => {
    if (!course) {
      client.fetchAllCourses().then(setCourses).catch(() => {});
    }
  }, [course, setCourses]);
  // §4.10.7: a signed-in user may only open courses they are enrolled in
  useEffect(() => {
    if (!currentUser) {
      setAllowed(true);
      return;
    }
    client
      .findMyCourses()
      .then((mine: Course[]) => {
        const enrolled = mine.some((c) => c._id === courseId);
        setAllowed(enrolled);
        if (!enrolled) router.replace("/dashboard");
      })
      .catch(() => setAllowed(true));
  }, [currentUser, courseId, router]);
  if (!allowed) return null;
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
        <span className="text-sm font-normal text-neutral-600">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
