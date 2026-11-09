"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username || !password || password !== verify) return;
    setCurrentUser({ ...emptyUser, _id: crypto.randomUUID(), username, password });
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`wd-username ${field}`}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`wd-password ${field}`}
      />
      <input
        placeholder="verify password"
        type="password"
        value={verify}
        onChange={(e) => setVerify(e.target.value)}
        className={`wd-password-verify ${field}`}
      />
      <button
        type="button"
        id="wd-signup-btn"
        onClick={signup}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
