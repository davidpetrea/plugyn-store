import Image from 'next/image';
import Link from 'next/link';
import { ReactComponentElement } from 'react';

const Footer = () => {
 return (
  <footer className='p-4 bg-black bg-opacity-50 border-t border-grey'>
   <div className='flex flex-col items-center gap-4 mx-auto lg:flex-row max-w-7xl justify-evenly'>
    <div>
     <Link href='/'>
      <Image
       src='/logo-footer.png'
       alt='PS logo'
       width={210}
       height={210}
       className='opacity-70'
      />
     </Link>

     <p className='text-sm text-grey'>Copyright © Plugyn Store 2022</p>
    </div>
    {/* Information links */}
    <div className='flex flex-col items-center gap-1 text-sm text-grey'>
     <p className='font-bold uppercase text-opacity-30 text-grey'>
      Information
     </p>
     <FooterLink path='/how' title='How it works' />
     <FooterLink path='/reviews' title='Reviews' />
     <FooterLink path='/about' title='About us' />
     <FooterLink path='/faq' title='FAQ' />
    </div>
    {/* Contacts */}
    <div className='flex flex-col items-center gap-1 text-sm text-grey'>
     <p className='font-bold uppercase text-opacity-30 text-grey'>Contact us</p>

     <FooterLink
      path='https://discordapp.com/users/761971346179489814'
      title='PlugynStore#8189'
      icon={<Image src='/discord.svg' alt='Discord' width={20} height={20} />}
     />

     <FooterLink
      path='https://join.skype.com/invite/iRidvFOxNO2l'
      title='live:plugynStore'
      icon={<Image src='/skype.svg' alt='Skype' width={18} height={18} />}
     />

     <FooterLink
      path='https://www.elitepvpers.com/forum/metin2-trading/4599199-all-private-servers-600-positive-reviews-yangstore-plugyn-cheap-safe.html'
      title='ElitePvPers.com'
      icon={<Image src='/epvpicon.png' alt='EPVP' width={20} height={20} />}
     />
     <FooterLink
      path='mailto:support@plugynstore.com'
      title='support@plugynstore.com'
      icon={<Image src='/mail.svg' alt='Mail' width={20} height={20} />}
     />
    </div>
   </div>
   <div className='p-4'></div>
   <p className='text-xs font-medium text-center text-opacity-50 text-grey'>
    All included here mentioned brand names are registered and property of the
    respective companies. We are not affiliated with any of the servers
    mentioned.
   </p>
  </footer>
 );
};

const FooterLink = ({
 path,
 title,
 icon,
}: {
 path: string;
 title: string;
 icon?: ReactComponentElement<typeof Image>;
}): JSX.Element => {
 if (icon)
  return (
   <div className='flex items-center gap-1'>
    {icon}
    <Link
     href={path}
     className='transition ease-linear hover:text-white duration'
    >
     {title}
    </Link>
   </div>
  );

 return (
  <Link
   href={path}
   className='transition ease-linear hover:text-white duration'
  >
   {title}
  </Link>
 );
};

export default Footer;
