import { Server } from '../../utils/types';
import Image from 'next/image';
import Link from 'next/link';
const ServerItem = ({ server }: { server: Server }) => {
 return (
  <div className='flex flex-col items-center bg-black border bg-opacity-30 border-gold-soft rounded-mg'>
   <div className='w-5/6 pt-2 text-lg font-medium text-center uppercase border-b border-gold-soft'>
    {server.name}
   </div>
   <div className='flex flex-col items-center gap-2 py-2'>
    <div className='text-2xl font-bold text-gold-soft'>{server.amount}</div>
    <Image src='/arrows.svg' alt='=' width={20} height={20} />
    <div className='text-2xl font-bold text-gold-soft'>
     {server.priceEUR} EUR
    </div>
   </div>
   <Link
    href='/how'
    className='w-full p-2 font-bold text-center transition duration-150 ease-linear bg-black border-t border-gold-soft bg-opacity-70 hover:bg-gold-soft hover:bg-opacity-80 hover:text-black'
   >
    Buy
   </Link>
  </div>
 );
};

export default ServerItem;
