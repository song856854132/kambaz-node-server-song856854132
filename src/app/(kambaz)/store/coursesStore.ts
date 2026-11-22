"use client";
import { create } from "zustand";
// courses.json rows don't all carry every field (RS104 has no number or dates),
// so the optional ones are spelled out instead of inferred from the JSON
export type Course = {
  _id: string;
  name: string;
  description: string;
  image: string;
  term?: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;
};
const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
};
// Ch. 5: Express owns the courses. This store is only a client cache that
// the screens fill with what the server returns.
type CoursesStore = {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  addCourse: (course: Course) => Course;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  // The server already assigned _id, so the course is appended as-is
  addCourse: (course) => {
    set((state) => ({ courses: [...state.courses, course] }));
    return course;
  },
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
}));
export { emptyCourse };
