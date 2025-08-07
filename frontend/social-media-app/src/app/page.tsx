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

      <div className="flex p-4 bg-red-400 h-auto justify-center">
        {/* leftSide */}
        <div className="w-[500px] h-fit flex flex-col items-center ">
          <div className="flex flex-col items-center mt-8 bg-green-500 w-full ">
            <Image
              src="/profile.png"
              alt="profile"
              width={100}
              height={100}
              className=" rounded-full"
            />
            <p> UserName</p>
            <div className="flex px-4">
              <p className="mx-5"> 500k Followers</p>
              <p className="mx-5"> 500k Followers</p>
            </div>
          </div>
          <div className="mt-8 bg-amber-400 w-[400px]">
            {/* suggestions */}
            <h1 className="text-md font-bold text-center mt-4">
              Suggestions for you
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-between w-full px-4 py-2 border-b">
                <div className="flex items-center">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p className="ml-2">User Name</p>
                </div>
                <Link href="/login" className="text-blue-500">
                  Follow
                </Link>
              </div>
              <div className="flex items-center justify-between w-full px-4 py-2 border-b">
                <div className="flex items-center">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p className="ml-2">User Name</p>
                </div>
                <Link href="/login" className="text-blue-500">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className=" mx-auto h-auto flex flex-col items-center">
          <StoryCoursel />
          <PostCard />
          <PostCard />
        </div>
        {/* rightSide */}
        <div className="w-[500px] mt-[100px] px-16 bg-blue-500 h-fit"></div>
      </div>
    </div>
  );
}
