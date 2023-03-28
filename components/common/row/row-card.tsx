import { PropsWithChildren } from "react";
import Card from "../card/card";

export default function RowCard({ children }: PropsWithChildren<{}>) {
  return (
    <Card className="snap-start shrink-0 grid w-[calc(100%-2rem)]">
      {children}
    </Card>
  );
}