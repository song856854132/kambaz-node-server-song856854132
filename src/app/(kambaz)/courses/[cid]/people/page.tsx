import PeopleTable from "./table/page";

// The People link goes to /people/table; /people shows the same roster.
export default function People() {
  return (
    <div id="wd-people">
      <PeopleTable />
    </div>
  );
}
