import ServersList from "components/store/ServersList";

async function getServers() {
  const res = await fetch("/api/servers");

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
