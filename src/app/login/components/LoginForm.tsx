"use client";

import { loginAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (!errorMessage) {
        router.replace("/");
      } else {
        console.error(errorMessage);
      }
    });
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      action={handleClickLoginButton}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 rounded-lg"
        required
        disabled={isPending}
      />

      <input
        type={"password"}
        name="password"
        placeholder="Password"
        className="p-2 rounded-lg"
        required
        disabled={isPending}
      />

      <button
        disabled={isPending}
        className="mt-5 bg-slate-400 py-2 rounded-lg"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
