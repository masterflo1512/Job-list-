import React from "react";
import Return from "./icons/Return";
import Link from "next/link";

type ImagesProps = {
  images: Array<string>;
};
function Footer(props: ImagesProps) {
  const { images = [] } = props;

  return (
    <div>
      <h1 className="font-bold text-2xl text-save-icon">Attached images</h1>
      <div className="flex gap-5 pb-24">
        {images.map((image, i) => (
          <img
            key={i}
            src={`${image}?random=${Math.floor(Math.random() * 1000)}`}
            alt=""
            className="rounded-md w-64 h-40"
          />
        ))}
      </div>
      <Link
        href="/jobs"
        className="flex items-center gap-2 bg-dark-blue bg-opacity-[0.14] inline-flex p-3 rounded-lg -ml-20 "
      >
        <Return styles="inline" />
        RETURN TO JOB BOARD
      </Link>
    </div>
  );
}

export default Footer;
