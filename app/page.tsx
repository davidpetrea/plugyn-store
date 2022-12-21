import ChooseUs from 'components/Home/ChooseUs';
import Title from '../components/Home/Title';
import EpvpSection from 'components/Home/EpvpSection';
import { EpvpData } from 'utils/types';

const getTrustpilotInfo = async () => {
 const res = await fetch('https://www.trustpilot.com/review/plugynstore.com');
 if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  throw new Error('Failed to fetch data');
 }
 console.log(res);
 return res;
};

const getEpvpInfo = async () => {
 const res = await fetch(
  `https://www.elitepvpers.com/api/tbm.php?action=get-user-info&u=7528862&secretword=${process.env.EPVP_SECRET_WORD}`
 );

 if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  throw new Error('Failed to fetch data');
 }

 return res.json();
};

const Home = async () => {
 const epvpInfo = (await getEpvpInfo()) as EpvpData;
//  const trustpilotInfo = await getTrustpilotInfo();

 return (
  <div className='p-4'>
   <Title />
   <ChooseUs />
   <EpvpSection rating={epvpInfo.data?.ratings.theblackmarket.positive} />
   <div id='reviews'>Reviews bro</div>
  </div>
 );
};

export default Home;
