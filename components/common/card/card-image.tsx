import { ImgHTMLAttributes } from "react";
import Link from "next/link";

type CardImageProps = {
  to?: string;
};

type Props = ImgHTMLAttributes<HTMLImageElement> & CardImageProps;

export default function CardImage({ alt, src, to, ...imageProps }: Props) {
  if (to) {
    return (
      <Link
        href={to}
        className="flex w-full cursor-pointer rounded-t-lg bg-black"
        passHref
      >
        <img
          alt={alt}
          className="h-32 w-full rounded-t-lg opacity-80"
          loading="lazy"
          height="15rem"
          width="100%"
          src={src}
          {...imageProps}
        />
      </Link>
    );
  }

  return (
    <img
      alt={alt}
      className="h-32 w-full rounded-t-lg opacity-80"
      loading="lazy"
      height="15rem"
      src={src}
      width="100%"
      {...imageProps}
    />
  );
}
