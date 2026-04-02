import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URI!, { dbName: "event-manager" });
    console.log("Mongodb connected");
} catch (error) {
    console.error('Mongodb Connection error', error);
    process.exit(1);
}