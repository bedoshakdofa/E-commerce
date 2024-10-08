import { config } from "dotenv";
import app from "./app.js";
config({ path: "./config.env" });
import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`database is connected successfully`);
});

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});
