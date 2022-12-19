import Title from '../components/Home/Title';
import PriceList from '../components/Home/PriceList';
import ServersList from '../components/Home/ServersList';
const Home = () => {
 return (
  <div className='p-4'>
   <Title />
   <PriceList />
   <ServersList />
   <div id='reviews'>Reviews bro</div>
  </div>
 );
};

export default Home;
