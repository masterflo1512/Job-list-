import React from "react";

type ImagesProps = {
  images: Array<string>;
};
function Footer(props: ImagesProps) {
  const { images } = props;

  return (
    <div>
      <h1 className="font-bold text-2xl text-save-icon">Attached images</h1>
      <div className="flex gap-5 pb-24">
        {images.map((image, i) => (
          <img
            src={`${props.images[i]}?random=${Math.floor(
              Math.random() * 1000
            )}`}
            alt=""
            className="rounded-md w-64 h-40"
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
