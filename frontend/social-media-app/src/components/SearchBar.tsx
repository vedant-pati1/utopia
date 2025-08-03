import Image from "next/image";
export default function SearchBar() {
  return (
    <div className="border flex ">
      <Image src="/search.svg" alt="Search Icon" width={25} height={25} />
      <input
        type="text"
        placeholder="Search"
        className="rounded px-3 py-1 focus:outline-none focus:border-blue-500"
        style={{ width: "400px" }}
      />
    </div>
  );
}
