import React from "react";

interface MessageBubbleProps {
  message: string;
  otherUser: boolean;
}

export default function ({ message, otherUser }: MessageBubbleProps) {
  return (
    <div
      className={`${otherUser ? "self-start" : "self-end"} my-2 flex items-center justify-between px-4 py-2 border-b bg-white max-w-[600px] h-auto`}
    >
      <p className="break-all">{message}</p>
    </div>
  );
}
