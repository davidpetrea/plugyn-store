import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../utils/connection';
import Server from '../../../models/Server';
import { ResponseFuncs } from '../../../utils/types';

//endpoint: /api/servers
export default function handler(req: NextApiRequest, res: NextApiResponse) {
 //capture request method, we type it as a key of ResponseFunc to reduce typing later
 const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

 //function for catch errors
 const catcher = (error: Error) => res.status(500).json({ error });

 // Potential Responses
 const handleCase: ResponseFuncs = {
  // Get requests
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
   await connect(); // connect to database

   return res.json(await Server.find({}).catch(catcher));
  },
  // Post requests
  POST: async (req: NextApiRequest, res: NextApiResponse) => {
   await connect(); // connect to database
   console.log(req.body);

   const newServer = await Server.create(req.body).catch(catcher);

   return res.status(201).json({ msg: 'Server was created.', data: newServer });
  },
 };

 const response = handleCase[method];
 if (response) return response(req, res);
 else
  return res
   .status(400)
   .json({ error: 'No response for this request method.' });
}
