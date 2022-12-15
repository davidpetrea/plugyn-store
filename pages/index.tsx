import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
 return (
  <div>
   <Head>
    <title>Plugyn Store | Safe & Cheap Metin2 Yang</title>
    <meta
     name='description'
     content='Welcome to the plugyn yang store! Here you can get some of the cheapest yang on almost all private and official Metin2 servers. Contact us today for a custom offer!'
    />
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <h1 className='text-2xl'>Welcome to the Plugyn Store!</h1>
   </main>

   <footer className='border-t border-white'>
    <p>Footer</p>
   </footer>
  </div>
 );
}
