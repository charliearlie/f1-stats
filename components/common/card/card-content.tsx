import { PropsWithChildren } from "react";

type CardContentProps = {
  noPadding?: boolean;
};

type Props = PropsWithChildren<CardContentProps>;

export default function CardContent({ children, noPadding = false }: Props) {
  return <div className={`py-2 ${noPadding ? "" : "px-2"}`}>{children}</div>;
}
