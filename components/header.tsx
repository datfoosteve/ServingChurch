import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <div className="bg-fixed bg-cover bg-center bg-no-repeat rounded-md bg-[#F9FAFB] dark:bg-gray-900" style={{ backgroundImage: "url(../images/banner.png)" }}>
    <header className="mx-auto pt-4 my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link
        href="/"
        className="font-display text-xl font-bold text-gray-900 hover:underline dark:text-gray-100 tablet:text-2xl"
      >
        The Serving Church
      </Link>
      <ThemeToggle />
      <nav className="text-lg tablet:ml-auto tablet:text-xl  text-gray-900 dark:text-gray-100">
        <ul className="my-4 flex gap-2 tablet:m-0">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Podcasts
            </Link>
          </li>

          <li>
            <Link href="/prayer" className="hover:underline">
              Prayer Requests
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}
