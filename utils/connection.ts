import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

// connection function
export const connect = async () => {
 const connection = await mongoose
  .connect(MONGO_URI as string)
  .catch(err => console.log(err));
 console.log('Mongoose Connection Established');

 return connection;
};
