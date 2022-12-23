"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "@/modals/ContactModal";
import MobileNavModal from "./modals/MobileNavModal";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full p-2 bg-black border-b lg:px-4 border-grey bg-opacity-30 p- backdrop-blur-sm ">
      <div className="flex items-center justify-between gap-4 mx-auto text-lg max-w-7xl">
        <Link href="/">
          <div>
            {" "}
            <Image src="/logo-small.png" alt="Home" width={64} height={36} />
          </div>
        </Link>
        {/* Large view links */}
        <div className="items-center justify-end flex-1 hidden gap-16 lg:flex">
          <NavLink href="/store" title="Store" />
          <NavLink href="/how" title="How it works" />
          <NavLink href="/faq" title="FAQ" />
          <NavLink href="/about" title="About us" />
          <ContactModal />
        </div>
        {/* Mobile menu */}
        <MobileNavModal />
      </div>
    </nav>
  );
};

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const path = usePathname();
  const isActive = href === path;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-gold-soft border-gold"
          : "hover:text-gold-soft hover:border-gold border-transparent"
      } transition duration-150 ease-linear border-b font-medium`}
    >
      {title}
    </Link>
  );
};

export default Navbar;
