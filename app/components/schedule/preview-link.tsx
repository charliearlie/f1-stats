import Link, { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export default function PreviewLink({
  children,
  ...linkProps
}: PropsWithChildren<LinkProps>) {
  return (
    <Link className="h-full w-full" {...linkProps}>
      <div className="flex justify-between items-center card-action">
        {/* Children is just the text. Maybe we could use a prop to make it more
        obvious */}
        <span className="font-russo">{children}</span>
        <button
          name="View results"
          className="rounded font-russo text-gray-800 dark:text-gray-300 p-2 outline outline-1 outline-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
}
