import Image from "next/image";
export default function PostCard() {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white my-4 w-[500px] flex flex-col">
      <div className="inline-flex items-center ">
        <Image
          src="/profile.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full mb-2"
        />
        <span className="text-blue-500 font-semibold ml-1">@username</span>
      </div>
      <h2 className="text-xl font-bold mb-2">Post Title</h2>
      <Image
        src="/demo-post-image.jpg"
        alt="Post Image"
        width={500}
        height={300}
        className="rounded mb-4"
      />
      <div className="flex items-start flex-col">
        <span className="text-gray-500">2 hours ago</span>
        <p className="text-gray-700 mb-4">
          This is a brief description of the post content.
        </p>
      </div>
    </div>
  );
}
