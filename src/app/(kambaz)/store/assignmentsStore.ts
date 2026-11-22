"use client";
import { create } from "zustand";
export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until?: string;
};
export const emptyAssignment: Omit<Assignment, "_id" | "course"> = {
  title: "New Assignment",
  description: "New Description",
  points: 100,
  due: "2024-05-13",
  available: "2024-05-06",
  until: "2024-05-13",
};
// Ch. 5: a client cache of the assignments the server returned
type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
};
export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: [],
  setAssignments: (assignments) => set({ assignments }),
  // The server already assigned _id, so the assignment is appended as-is
  addAssignment: (assignment) =>
    set((state) => ({ assignments: [...state.assignments, assignment] })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
}));
