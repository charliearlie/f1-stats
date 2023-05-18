import classNames from "classnames";
import { Standing } from "../../lib/types";

type Props = {
  standing: Standing;
};

export default function StandingItem({ standing }: Props) {
  return (
    <li className={classNames("flex justify-between font-russo")}>
      <p className="flex gap-1">
        <span className={`border-l-4 border-${standing.constructor} pl-2 w-8`}>
          {standing.position}.
        </span>
        <span>{standing.driverName}</span>
      </p>
      <p>{standing.points}</p>
    </li>
  );
}
