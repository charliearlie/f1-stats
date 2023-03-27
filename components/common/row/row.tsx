import { PropsWithChildren } from "react";

export default function Row({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex gap-2 snap-x snap-mandatory w-full ml-2 overflow-scroll">
      {children}
    </div>
  );
}
