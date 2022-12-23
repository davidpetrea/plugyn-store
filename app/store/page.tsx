import ServersList from "components/store/ServersList";
import ServerModel from "models/Server";
import { connect } from "utils/connection";
import { Server } from "utils/types";

async function getServers() {
  await connect(); // connect to database
  return (await ServerModel.find({})) as Server[];
}

export default async function Page() {
  const servers = (await getServers()) as Server[];
  console.log(servers);
  if (!servers.length) return null;
  return <ServersList servers={servers} />;
}
