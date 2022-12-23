import ServersList from "components/store/ServersList";
import { Server } from "utils/types";

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
  const data = await res.json();
  return data;
}

export default async function Page() {
  const servers = (await getServers()) as Server[];
  console.log(servers);
  if (!servers.length) return null;
  return <ServersList servers={servers} />;
}
