"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return redirect("/");
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          action={async () => {
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    );
  }
}
