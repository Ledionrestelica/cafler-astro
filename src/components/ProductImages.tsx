import { useState } from "react";

export default function ProductImages({ image }: { image: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = [image, "/210-d.jpg", "/fit-picture.jpg", "/cloth.jpg"];

  return (
    <div className="flex flex-1 flex-col-reverse gap-2 md:flex-row w-full h-full">
      <div className="flex flex-row md:flex-col gap-4 md:w-[15%]">
        {images.map((image, index) => (
          <div
            onClick={() => setActiveImage(index)}
            key={index}
            className={`max-sm:flex-1 rounded-[14px] box-content overflow-hidden aspect-square max-h-[100px] ${activeImage === index ? "ring-2 ring-[var(--color-blue-500)]" : ""}`}
          >
            <img
              alt={image}
              src={images[index]}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full border aspect-square border-stroke">
        <img
          src={images[activeImage]}
          alt="Car Cover Photos"
          className="object-cover w-full h-full max-sm:h-[500px]"
        />
      </div>
    </div>
  );
}
