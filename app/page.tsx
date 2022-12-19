import ChooseUs from 'components/Home/ChooseUs';
import Title from '../components/Home/Title';

const Home = async () => {
 return (
  <div className='p-4'>
   <Title />
   <ChooseUs />
   <div id='reviews'>Reviews bro</div>
  </div>
 );
};

export default Home;
