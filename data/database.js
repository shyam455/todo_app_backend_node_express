import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then((c) => {
      console.log(`Database connected with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
      ś;
    });
};
