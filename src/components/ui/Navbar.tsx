import Image from "next/image";
import Link from "next/link";
import Logo from "../../app/icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-purple-600 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-purple-200 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-purple-400 duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-purple-600 duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-purple-800 duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
