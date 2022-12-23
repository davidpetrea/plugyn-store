import ServersList from "components/store/ServersList";

async function getServers() {
  console.log("env?", process.env.API_URL);
  console.log("url?", process.env.VERCEL_URL);
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.API_URL;
  console.log("baseUrl?", baseUrl);
  const res = await fetch(`${baseUrl}/api/servers`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);
  return res.json();
}

export default async function Store() {
  const servers = await getServers();
  console.log(servers);
  return <ServersList servers={servers} />;
}
