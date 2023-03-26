import type { PropsWithChildren } from "react";

export default function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`flex bg-white flex-col rounded-lg shadow shadow-gray-400 focus:outline-4 focus:outline-blue-400 ${className}`}
    >
      {children}
    </div>
  );
}
