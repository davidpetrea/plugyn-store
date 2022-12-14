import ServersList from "components/store/ServersList";
import ServerModel from "models/Server";
import { connect } from "utils/connection";
import { Server } from "utils/types";
import { cache } from "react";

const getServers = cache(async () => {
  await connect(); // connect to database
  const res = (await ServerModel.find({}).lean()) as Server[];

  return res;
});

export default async function Page() {
  const servers = (await getServers()).map((elem: Server) => {
    return { ...elem, _id: elem._id.toString() };
  });

  if (!servers.length) return null;
  return <ServersList servers={servers as Server[]} />;
}

export const revalidate = 60; // revalidate this page every 60 seconds
