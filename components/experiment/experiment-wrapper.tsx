import { PropsWithChildren } from "react";

export default function ExperimentWrapper({ children }: PropsWithChildren<{}>) {
  if (!process.env.EXPERIMENT_API) return null;

  return children;
}
