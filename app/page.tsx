import ChooseUs from "components/homeTemp/ChooseUs";
import Title from "../components/homeTemp/Title";
import EpvpSection from "components/homeTemp/EpvpSection";
import { EpvpData } from "utils/types";

const getEpvpInfo = async () => {
  const res = await fetch(
    `https://www.elitepvpers.com/api/tbm.php?action=get-user-info&u=7528862&secretword=${process.env.EPVP_SECRET_WORD}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Home = async () => {
  const epvpInfo = (await getEpvpInfo()) as EpvpData;

  return (
    <div>
      <Title />
      <ChooseUs />
      <EpvpSection rating={epvpInfo.data?.ratings.theblackmarket.positive} />
    </div>
  );
};

export default Home;
