"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  if (!session) {
    throw new Error("Navbar is loading without logining in");
  }

  return (
    <>
      <nav>
        <div className="my-1 flex justify-between items-center">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={75} height={75} />
          </div>

          <div className="border flex items-center px-2 py-1 rounded">
            <Image src="/search.svg" alt="Search Icon" width={25} height={25} />
            <input
              type="text"
              placeholder="Search"
              className="rounded px-3 py-1 focus:outline-none focus:border-blue-500"
              style={{ width: "400px" }}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post
            </button>

            <Link href="/login">
              <Image
                src={session.user?.image || "/profile.png"}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <form
              method="POST"
              action="/image"
              encType="multipart/form-data"
              onSubmit={onSubmitHandler}
            >
              <input
                type="file"
                name="file"
                accept="image/*"
                className="mb-4"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
