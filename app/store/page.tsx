import ServersList from "components/store/ServersList";

async function getServers() {
  console.log("env?", process.env.API_URL);
  console.log("url?", process.env.VERCEL_URL);
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.API_URL;
  const res = await fetch(`${baseUrl}/api/servers`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Store = async () => {
  const servers = await getServers();
  return <ServersList servers={servers} />;
};

export default Store;
