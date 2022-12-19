import Image from 'next/image';
import Link from 'next/link';
import { ReactComponentElement } from 'react';
import { discordLink, skypeLink, epvpLink, mailLink } from 'utils/contacts';
import {
 DiscordIcon,
 SkypeIcon,
 EpvpIcon,
 MailIcon,
} from '@/svg/SvgComponents';

const Footer = () => {
 return (
  <footer className='p-4 bg-black bg-opacity-50 border-t border-grey'>
   <div className='flex flex-col items-center gap-4 mx-auto lg:flex-row max-w-7xl justify-evenly'>
    {/* Logo & copyrights */}
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
     <FooterLink href='/store' title='Store' />
     <FooterLink href='/how' title='How it works' />
     <FooterLink href='/reviews' title='Reviews' />
     <FooterLink href='/about' title='About us' />
     <FooterLink href='/faq' title='FAQ' />
    </div>
    {/* Contacts */}
    <div className='flex flex-col items-center gap-1 text-sm text-grey'>
     <p className='font-bold uppercase text-opacity-30 text-grey'>Contact us</p>

     <FooterLink
      href={discordLink}
      title='PlugynStore#8189'
      icon={<DiscordIcon />}
     />

     <FooterLink
      href={skypeLink}
      title='live:plugynStore'
      icon={<SkypeIcon />}
     />

     <FooterLink
      href={epvpLink}
      title='ElitePvPers Profile'
      icon={<EpvpIcon />}
     />
     <FooterLink
      href={mailLink}
      title='support@plugynstore.com'
      icon={<MailIcon />}
     />
    </div>
   </div>
   <div className='p-4'></div>
   {/* Footer note */}
   <p className='text-xs font-medium text-center text-opacity-50 text-grey'>
    All included here mentioned brand names are registered and property of the
    respective companies. We are not affiliated with any of the servers
    mentioned.
   </p>
  </footer>
 );
};

const FooterLink = ({
 href,
 title,
 icon,
}: {
 href: string;
 title: string;
 icon?: ReactComponentElement<typeof Image>;
}): JSX.Element => {
 if (icon)
  return (
   <Link
    href={href}
    className='flex items-center gap-1 transition duration-200 ease-linear hover:text-white'
   >
    {icon}
    <div className=''>{title}</div>
   </Link>
  );

 return (
  <Link
   href={href}
   className='transition ease-linear hover:text-white duration'
  >
   {title}
  </Link>
 );
};

export default Footer;
