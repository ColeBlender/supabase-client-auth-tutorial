"use client";

import { signOutAction } from "@/actions/auth";
import { useTransition } from "react";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = () => {
    startTransition(async () => {
      const { errorMessage } = await signOutAction();
      if (errorMessage) {
        console.error(errorMessage);
      }
    });
  };

  return (
    <button
      className="bg-slate-400 w-36 py-2 rounded-lg text-center"
      onClick={handleClickSignOutButton}
      disabled={isPending}
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
