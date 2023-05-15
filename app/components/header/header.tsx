import Link from "next/link";
import HeaderSearchAndMenu from "./header-search-and-menu";

export default function Header() {
  return (
    <header className="bg-white border-gray-200 p-2 z-10 sticky top-0 rounded-b-md dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-centerfont-semibold text-2xl whitespace-nowrap font-russo dark:text-white">
            <span className="text-4xl">F1</span>Stats
          </span>
        </Link>
        <HeaderSearchAndMenu />
      </div>
    </header>
  );
}
