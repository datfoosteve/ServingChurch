
import Image from "next/image";

import image from "../images/jpreagan.jpg";


export default function Aloha() {
  return (
    // < class="bg-fixed ..." style="background-image: url("../images/background.png")">
    <div className="bg-fixed bg-cover bg-center bg-no-repeat rounded-md bg-[#F9FAFB] dark:bg-gray-900" style={{ backgroundImage: "url(../images/background.png)" }}>
    <div className="md:flex">
      <div>
        <div className="mb-20 mt-20 block w-full rounded-md border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100  ">
        <h2 className="my-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-[text-2rem] lg:text-[3.5rem] lg:leading-none">
          A Warm Welcome <br />{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           From The Serving Church
          </span>
        </h2>
        <p className="my-4 md:text-lg lg:text-xl">
         A Passion Driven Church striving to serve the community.
        </p>
        <p className="my-4 md:text-lg lg:text-xl">
          With a vision to reach the unreached and to serve the world.
        </p>
        </div>
        
      </div>
      <div className="m-auto">
        <Image
          src={image}
          alt="Our Logo"
          width={512}
          height={512}
          priority
          style={{ borderRadius: "100%" }}
        />
      </div>
    </div>
    </div>
  
  );
}
