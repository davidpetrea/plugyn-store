'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
 return (
  <nav className='sticky top-0 w-full p-2 bg-black border-b border-grey bg-opacity-30 p- backdrop-blur-sm '>
   <div className='flex items-center justify-between gap-4 mx-auto text-lg max-w-7xl'>
    <Link href='/'>
     <Image src='/logo-small.png' alt='PS Logo' width={60} height={160} />
    </Link>
    {/* Large view links */}
    <div className='items-center justify-end flex-1 hidden gap-16 lg:flex'>
     <NavLink href='/how' title='How it works' />
     <NavLink href='/reviews' title='Reviews' />
     <NavLink href='/faq' title='FAQ' />
     <NavLink href='/about' title='About us' />
     <button className='transition duration-150 ease-linear border-b border-transparent hover:text-gold-soft hover:border-gold'>
      Contact
     </button>
    </div>
    {/* Mobile menu */}
    <button onClick={() => console.log('hopa')} className='lg:hidden'>
     <Image src='/menu.svg' alt='Menu' width={32} height={32} />
    </button>
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
     ? 'text-gold-soft border-gold'
     : 'hover:text-gold-soft hover:border-gold'
   } transition duration-150 ease-linear border-b border-transparent `}
  >
   {title}
  </Link>
 );
};

export default Navbar;
