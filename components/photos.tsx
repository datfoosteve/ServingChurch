import Image from "next/image";
import clsx from "clsx";

import image1 from "../images/photos/laptop.jpg";
import image2 from "../images/photos/jpreagan.jpg";
import image3 from "../images/photos/keyboard.jpg";

export default function Photos() {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];
  const alt = [
    "Serving Church Members",
    "Logo of Serving Church",
    "Serving Church Members",
  ];

  return (
    <div className="bg-fixed bg-cover bg-center bg-no-repeat rounded-md bg-[#F9FAFB] dark:bg-gray-900" style={{ backgroundImage: "url(../images/background.png)" }}>
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {[image1, image2, image3].map((image, imageIndex) => (
        <div
          key={image.src}
          className={clsx(
            "relative aspect-[9/10] w-60 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
            rotations[imageIndex % rotations.length]
          )}
        >
          <Image
            src={image}
            alt={alt[imageIndex]}
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
    </div>
  );
}
