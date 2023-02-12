import Link from "next/link";
import Image from "next/image";
import {
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
  AiFillGithub as GitHub,
  AiFillYoutube as YouTube,
} from "react-icons/ai";
import image from "../images/jpreagan.jpg";

const social = {
  twitter: `https://twitter.com`,
  linkedin: `https://www.linkedin.com/in/stephenputhenpurackal/`,
  github: `https://github.com/datfoosteve`,
  youtube: `https://www.youtube.com`,
};

export default function Aloha() {
  return (
    // < class="bg-fixed ..." style="background-image: url("../images/background.png")">
    <div className="bg-fixed bg-cover bg-center bg-no-repeat rounded-md bg-[#F9FAFB] dark:bg-gray-900" style={{ backgroundImage: "url(../images/background.png)" }}>
    <div className="md:flex">
      <div>
        <div className="mt-20 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100  ">
        <h2 className="my-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-[text-2rem] lg:text-[3.5rem] lg:leading-none">
          A Warm Welcome <br />{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           From The Serving Church
          </span>
        </h2>
        <p className="my-4 md:text-lg lg:text-xl">
         A Community Driven Church striving to serve the community.
        </p>
        <p className="my-4 md:text-lg lg:text-xl">
          With a vision to reach the unreached and to serve the world.
        </p>
        </div>
        <div className="my-8 flex">
          <Link
            href={social?.twitter}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#1DA1F2]"
          >
            {" "}
            <Twitter size={40} title="Twitter" />
          </Link>
          <Link
            href={social?.linkedin}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#0077B5]"
          >
            {" "}
            <LinkedIn size={40} title="LinkedIn" />
          </Link>
          <Link
            href={social?.github}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#040404] dark:hover:text-gray-100"
          >
            {" "}
            <GitHub size={40} title="GitHub" />
          </Link>
          <Link
            href={social?.youtube}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#FF0000]"
          >
            {" "}
            <YouTube size={40} title="YouTube" />
          </Link>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src={image}
          alt="James Reagan"
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
