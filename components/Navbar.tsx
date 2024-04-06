import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="mt-16 mb-20 flex content-center items-center justify-between text-base font-medium">
      <div className="flex gap-3 items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt=""
          className="grayscale"
        />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blog</Link>
      </div>
    </header>
  );
}
