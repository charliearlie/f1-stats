import { PropsWithChildren } from "react";

type CardContentProps = {
  noPadding?: boolean;
};

type Props = PropsWithChildren<CardContentProps>;

export default function CardAction({ children, noPadding = false }: Props) {
  return (
    <div
      className={`py-2 border-t border-gray-300 ${
        noPadding ? "" : "px-2"
      } hover:bg-gray-100`}
    >
      {children}
    </div>
  );
}
