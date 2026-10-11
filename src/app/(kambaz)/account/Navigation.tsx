"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { id: "wd-account-signin-link", label: "Sign In", href: "/account/signin" },
    { id: "wd-account-signup-link", label: "Sign Up", href: "/account/signup" },
    { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
  ];
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
