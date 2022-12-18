'use client';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
 return (
  <nav className='sticky top-0 w-full p-3 bg-black border-b border-white bg-opacity-30 p- backdrop-blur-sm '>
   <div className='flex items-center justify-between gap-4 mx-auto text-lg max-w-7xl'>
    <Link href='/'>
     <Image src='/logo-small.png' alt='PS Logo' width={80} height={80} />
    </Link>
    {/* Large view links */}
    <div className='items-center justify-end flex-1 hidden gap-16 lg:flex'>
     <Link
      href='/how'
      className='transition duration-150 ease-linear border-b border-transparent hover:text-gold-soft hover:border-gold'
     >
      How it works
     </Link>
     <Link
      href='/about'
      className='transition duration-150 ease-linear border-b border-transparent hover:text-gold-soft hover:border-gold'
     >
      About us
     </Link>
     <button className='transition duration-150 ease-linear border-b border-transparent hover:text-gold-soft hover:border-gold'>
      Contact
     </button>
    </div>
    {/* Mobile menu */}
    <div className='lg:hidden'>
     <button onClick={() => console.log('hopa')}>
      <Image
       src='/menu.svg'
       alt='Menu'
       width={32}
       height={32}
       className='fill-orange-400'
      />
     </button>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
