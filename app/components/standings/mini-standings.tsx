import { Standing } from "../../lib/types";
import StandingItem from "./standing";

type Props = {
  standings: Standing[];
};
export default function MiniStandings({ standings }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
      {standings.map((standing) => (
        <StandingItem key={standing.position} standing={standing} />
      ))}
    </ul>
  );
}
