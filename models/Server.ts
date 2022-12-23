import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServerSchema = new Schema({
  name: String,
  priceEUR: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    enum: ["official", "private"],
    required: true,
  },
});

ServerSchema.index({ name: 1 }, { unique: true });
const Server = mongoose.models.server || mongoose.model("server", ServerSchema);

export default Server;
