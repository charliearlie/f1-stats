import type { PropsWithChildren } from "react";
import Card from "../card/card";

export default function RowCard({ children }: PropsWithChildren<{}>) {
  return (
    <Card className="snap-start shrink-0 grid w-[calc(100%-2rem)] sm:w-auto">
      {children}
    </Card>
  );
}
