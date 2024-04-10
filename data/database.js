import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};
