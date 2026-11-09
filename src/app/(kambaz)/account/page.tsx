"use client";
import { redirect } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function Account() {
  const { currentUser } = useAccountContext();
  if (!currentUser) {
    redirect("/account/signin");
  } else {
    redirect("/account/profile");
  }
}
