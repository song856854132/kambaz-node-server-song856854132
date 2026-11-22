"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const courseId = String(cid);
  const setModules = useModulesStore((state) => state.setModules);
  // The server already filters by course; this only hides another course's
  // cached modules for the moment before the fetch returns
  const modules = useModulesStore((state) => state.modules).filter(
    (module) => module.course === courseId,
  );
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then(setModules)
      .catch(() => setModules([]));
  }, [courseId, setModules]);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
