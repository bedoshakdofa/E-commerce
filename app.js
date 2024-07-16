import express from "express";
import categoryRouter from "./routes/categoryRouter.js";
import brandRouter from "./routes/brandRouter.js";
import subCategoryRouter from "./routes/subCategory.js";

const app = express();
app.use(express.json());
app.use("/categories", categoryRouter);
app.use("/brands", brandRouter);
app.use("/subCategries", subCategoryRouter);
export default app;
