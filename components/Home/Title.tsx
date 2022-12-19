import Link from 'next/link';

const Title = () => {

 return (
  <section className='flex flex-col w-full'>
   <div className='p-4 lg:p-8'></div>
   <h1 className='text-4xl font-bold text-center text-white'>
    Welcome to the{' '}
    <span className='border-b text-gold-soft border-gold'>Plugyn Store!</span>
   </h1>
   <div className='p-4'></div>
   <h2 className='text-xl font-bold text-center text-white uppercase'>
    Get cheap yang on your favourite{' '}
    <span className='text-gold-soft'>Metin2 Server </span>and become the
    strongest today!
   </h2>
   <Link
    href='/reviews'
    className='max-w-md p-3 px-12 mx-auto my-4 uppercase transition duration-200 ease-linear border rounded-sm border-gold-soft hover:bg-black hover:bg-opacity-70'
   >
    Check our reviews
   </Link>
  </section>
 );
};

export default Title;
