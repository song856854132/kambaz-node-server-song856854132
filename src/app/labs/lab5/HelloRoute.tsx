"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello).catch(() => setHello({}));
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>Next.js Route Handler</h3>
      <h4>GET /api/lab5/hello</h4>
      <pre className="rounded bg-neutral-100 p-2 text-sm">
        {JSON.stringify(hello)}
      </pre>
      <hr />
    </div>
  );
}
