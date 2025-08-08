"use client";
import Navbar from "@/components/Navbar";
import StoryCoursel from "@/components/StoryCoursel";
import PostCard from "@/components/PostCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />

      <div className="flex p-4 bg-gray-100 min-h-screen justify-center gap-6">
        {/* leftSide */}
        <div className="w-[350px] h-fit flex flex-col items-center">
          <div className="flex flex-col items-center mt-8 bg-white w-full rounded-xl shadow-md p-6">
            <Image
              src={session.user?.image || "/profile.png"}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">UserName</p>
            <div className="flex mt-2">
              <p className="mx-5 text-sm text-gray-500">
                <span className="font-bold text-gray-800">500k</span> Followers
              </p>
              <p className="mx-5 text-sm text-gray-500">
                <span className="font-bold text-gray-800">500k</span> Following
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white w-full rounded-xl shadow-md p-4">
            {/* suggestions */}
            <h1 className="text-md font-bold text-gray-700 mb-4 text-center">
              Suggestions for you
            </h1>
            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full px-2 py-3 border-b hover:bg-gray-50 transition">
                <div className="flex items-center">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-200"
                  />
                  <p className="ml-3 text-sm font-medium text-gray-800">
                    User Name
                  </p>
                </div>
                <Link
                  href="/login"
                  className="text-blue-500 text-sm font-semibold hover:underline"
                >
                  Follow
                </Link>
              </div>
              <div className="flex items-center justify-between w-full px-2 py-3 border-b hover:bg-gray-50 transition">
                <div className="flex items-center">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-200"
                  />
                  <p className="ml-3 text-sm font-medium text-gray-800">
                    User Name
                  </p>
                </div>
                <Link
                  href="/login"
                  className="text-blue-500 text-sm font-semibold hover:underline"
                >
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mx-auto flex-1 h-auto flex flex-col items-center gap-6">
          <StoryCoursel />
          <PostCard />
          <PostCard />
        </div>

        {/* rightSide */}
        <div className="w-[350px] mt-[100px] px-6 bg-white rounded-xl shadow-md h-fit"></div>
      </div>
    </div>
  );
}
