import { ImgHTMLAttributes } from "react";
import Link from "next/link";

type CardImageProps = {
  to?: string;
};

type Props = ImgHTMLAttributes<HTMLImageElement> & CardImageProps;

export default function CardImage({ to, ...imageProps }: Props) {
  if (to) {
    return (
      <Link
        href={to}
        className="flex w-full cursor-pointer rounded-t-lg bg-black"
        passHref
      >
        <img
          className="h-32 w-full rounded-t-lg opacity-80"
          loading="lazy"
          height="15rem"
          width="100%"
          {...imageProps}
        />
      </Link>
    );
  }

  return (
    <img
      className="h-32 w-full rounded-t-lg opacity-80"
      loading="lazy"
      height="15rem"
      width="100%"
      {...imageProps}
    />
  );
}
