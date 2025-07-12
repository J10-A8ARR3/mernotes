import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jcabarre05:4yWpNyDbnVr6wsKw@cluster0.o0tpamm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB CONNECTED SUCCESFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB");
  }
};
