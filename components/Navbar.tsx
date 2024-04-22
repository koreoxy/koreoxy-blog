import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiYoutubeFill } from "react-icons/ri";
import {
  RxChatBubble,
  RxDividerVertical,
  RxHome,
  RxPerson,
} from "react-icons/rx";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="mb-16 flex content-center items-center justify-between text-base font-medium border-b dark:border-b-gray-600">
      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt=""
            className="grayscale"
          />
          <Link href="/" className="max-sm:hidden">
            Home
          </Link>
          <Link href="/" className="sm:hidden">
            <RxHome />
          </Link>

          <Link href="/about" className="max-sm:hidden">
            About
          </Link>
          <Link href="/about" className="sm:hidden">
            <RxPerson />
          </Link>
          <Link href="/blogs" className="max-sm:hidden">
            Blogs
          </Link>
          <Link href="/blogs" className="sm:hidden">
            <RxChatBubble />
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://youtube.com/@1sh1sh" target="_blank">
          <RiYoutubeFill />
        </Link>
        <Link href="https://github.com/koreoxy" target="_blank">
          <RiGithubFill />
        </Link>
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
      </div>
    </header>
  );
}
