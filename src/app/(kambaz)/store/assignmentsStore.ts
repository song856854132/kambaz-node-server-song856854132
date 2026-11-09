"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";
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
type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
};
export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],
  // Replaces the draft's placeholder _id with a fresh one
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
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
