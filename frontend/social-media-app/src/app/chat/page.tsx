"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import MessageBubble from "@/components/messageBubble";

export default function () {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex h-screen">
      {/* all chats */}
      <div className="flex flex-col items-center  bg-green-500 flex-none w-[400px] ">
        <h1 className="text-lg font-bold">All Chats</h1>
        <div className="w-full p-4">
          {/* Chat list would go here */}

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
              {/* last seen */}
              {/* <p>last seen</p> */}
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
              {/* last seen */}
              {/* <p>last seen</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* current chat */}
      <div className="w-full min-w-[700px] bg-amber-500 flex flex-col justify-between">
        <div className="text-md font-bold border h-16">
          <div className="flex items-center">
            <Image
              src="/profile.png"
              alt="profile pic"
              width={64}
              height={64}
            />
            <span className="ml-2">username</span>
          </div>
        </div>
        {/* messages part */}
        <div className="flex-1 overflow-y-auto p-4 bg-amber-950 flex flex-col">
          {/* Messages would go here */}
          <MessageBubble otherUser={true} message="hi there" />
          <MessageBubble otherUser={false} message="hi there" />
        </div>

        <input
          type="text"
          placeholder="Type a message"
          className="border mb-1 h-12"
        />
      </div>
    </div>
  );
}
