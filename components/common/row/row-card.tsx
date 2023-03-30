import type { PropsWithChildren } from "react";
import { Card } from "../card";

export default function RowCard({ children }: PropsWithChildren<{}>) {
  return (
    <Card className="snap-start shrink-0 grid w-[calc(100%-2rem)] sm:w-auto min-h-[300px]">
      {children}
    </Card>
  );
}
