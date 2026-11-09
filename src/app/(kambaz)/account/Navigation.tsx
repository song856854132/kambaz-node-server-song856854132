"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

const SIGNED_OUT_LINKS = [
  { id: "wd-account-signin-link", label: "Sign In", href: "/account/signin" },
  { id: "wd-account-signup-link", label: "Sign Up", href: "/account/signup" },
];
const SIGNED_IN_LINKS = [
  { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
];

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  // Signed in: only Profile. Signed out: only Sign in and Sign up.
  const links = currentUser ? SIGNED_IN_LINKS : SIGNED_OUT_LINKS;
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          id={id}
          className={
            pathname === href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
