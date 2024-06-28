"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useGetUser } from "@/supabase/auth/client";

function Header() {
  const user = useGetUser();

  return (
    <div className="bg-slate-300 w-full h-20 flex items-center gap-4 px-4 justify-between">
      <p>{user?.name || "Not logged in"}</p>

      {user ? (
        <SignOutButton />
      ) : (
        <Link
          href="/login"
          className="bg-slate-400 w-36 py-2 rounded-lg text-center"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
