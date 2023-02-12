import Link from "next/link";
import {
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
  AiFillGithub as GitHub,
  AiFillYoutube as YouTube,
} from "react-icons/ai";

const social = {
  twitter: `https://twitter.com`,
  linkedin: `https://www.linkedin.com/in/stephenputhenpurackal/`,
  github: `https://github.com/datfoosteve`,
  youtube: `https://www.youtube.com`,
};


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto my-8 max-w-5xl px-4 text-base md:text-lg lg:text-xl">
      <Link href="/" className="hover:underline">
        The Serving Church
      </Link>{" "}
      © {year}

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

    </footer>
  );
}
