import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        aria-label="Search for Assignments"
      />{" "}
      <button type="button" id="wd-add-assignment-group">
        + Group
      </button>{" "}
      <button type="button" id="wd-add-assignment">
        + Assignment
      </button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button type="button">+</button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem cid={cid} aid="a1" title="A1 - ENV + HTML" details="Multiple Modules | Not available until Sep 8 at 12:00am | Due Sep 22 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="a2" title="A2 - CSS Basics" details="Multiple Modules | Not available until Sep 22 at 12:00am | Due Oct 6 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="a3" title="A3 - JavaScript Fundamentals" details="Multiple Modules | Not available until Oct 6 at 12:00am | Due Oct 20 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="a4" title="A4 - React Basics" details="Multiple Modules | Not available until Oct 20 at 12:00am | Due Nov 3 at 11:59pm | 100 pts" />
      </ul>
    </div>
  );
}