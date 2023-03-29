import Link from "next/link";
import type { PropsWithChildren } from "react";
import CardContent from "../card/card-content";
import RowCard from "./row-card";

type Props = {
  heading?: string;
  link?: string;
};

export default function Row({
  children,
  heading,
  link,
}: PropsWithChildren<Props>) {
  return (
    <>
      <div className="px-4 py-2 flex justify-between">
        <h3 className="text-3xl sm:text-4xl">{heading}</h3>
        {link && (
          <Link
            href={link}
            className="hidden sm:block outline outline-gray-300 rounded py-1 px-2 font-russo hover:bg-gray-700"
          >
            View more
          </Link>
        )}
      </div>
      <div className="flex gap-2 snap-x snap-mandatory w-full ml-2 sm:ml-0 sm:px-4 overflow-scroll sm:overflow-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
        {link && (
          <RowCard>
            <CardContent className="h-full flex items-center justify-center">
              <Link
                href={link}
                className="hidden sm:block outline outline-gray-300 rounded py-1 px-2 font-russo hover:bg-gray-700"
              >
                View more
              </Link>
            </CardContent>
          </RowCard>
        )}
      </div>
    </>
  );
}
