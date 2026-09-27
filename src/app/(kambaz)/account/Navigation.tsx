import Link from "next/link";

export default function AccountNavigation() {
  return <div id="wd-account-navigation">
    <Link href="/account/signin">Sign In</Link>
    <br />
    <Link href="/account/signup">Sign Up</Link>
    <br />
    <Link href="/account/profile">Profile</Link>
    <br />
  </div>;
}
