"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession();
  if (!session) {
    throw new Error("Navbar is loading without logining in");
  }

  return (
    <nav>
      <div className=" my-1 flex justify-between items-center">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={75} height={75} />
        </div>
        <div className="border flex ">
          <Image src="/search.svg" alt="Search Icon" width={25} height={25} />
          <input
            type="text"
            placeholder="Search"
            className="rounded px-3 py-1 focus:outline-none focus:border-blue-500"
            style={{ width: "400px" }}
          />
        </div>
        <div>
          <Link href="/profile" className="text-blue-500 hover:underline">
            <Image
              src={"/profile.png"}
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
