import { Time } from "../lib/types";

type Props = {
  status?: string;
  time: Time;
};

export default function RaceStatus({ status, time }: Props) {
  if (!time.time && status) {
    return <span>{status}</span>;
  } else if (time) {
    return <span>{time.time}</span>;
  }

  return null;
}
