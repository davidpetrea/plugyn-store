import { EpvpIcon } from '@/svg/SvgComponents';
import Link from 'next/link';

const EpvpSection = ({ rating }: { rating: number | undefined }) => {
 return (
  <div className='text-gold-soft'>
   <EpvpIcon width={160} height={160} />
   <h2 className='text-center'>Epvp section. Rating: {rating}</h2>
   
    <a
     href='https://www.trustpilot.com/review/plugynstore.com'
     target='_blank'
     rel='noreferrer'
    >
     Check out our reviews on Trustpilot
    </a>

  </div>
 );
};

export default EpvpSection;
