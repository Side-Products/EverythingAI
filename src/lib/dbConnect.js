import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(process.env.MONGODB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 60000,
      })
      .then((conn) => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    console.log("DB Connection Error:", error);
    process.exit(1);
  }
};

export default dbConnect;
