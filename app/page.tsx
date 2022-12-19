import Title from '../components/Home/Title';
import ServersList from '../components/Home/ServersList';

async function getServers() {
 const res = await fetch('http://localhost:3000/api/servers');

 if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  throw new Error('Failed to fetch data');
 }

 return res.json();
}

const Home = async () => {
 const servers = await getServers();

 return (
  <div className='p-4'>
   <Title />
   <ServersList servers={servers} />
   <div id='reviews'>Reviews bro</div>
  </div>
 );
};

export default Home;
