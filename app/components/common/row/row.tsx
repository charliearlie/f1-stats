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
      <div className="px-4 sm:px-0 py-2 flex justify-between">
        <h3 className="text-3xl sm:text-4xl">{heading}</h3>
        {link && (
          <Link
            href={link}
            className="hidden sm:flex items-center outline outline-gray-300 rounded py-1 px-2 font-russo hover:bg-gray-700"
          >
            View more
          </Link>
        )}
      </div>
      <div className="flex gap-2 py-1 snap-x snap-mandatory w-full ml-2 mb-4 sm:ml-0 overflow-scroll sm:overflow-hidden sm:auto-rows-[0px] sm:gap-y-1 sm:py-0 sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-4">
        {children}
        {link && (
          <RowCard>
            <CardContent className="h-full flex items-center justify-center">
              <Link
                href={link}
                className="outline outline-gray-300 rounded py-1 px-2 font-russo hover:bg-gray-700"
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
