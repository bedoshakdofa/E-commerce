import express from "express";
import categoryRouter from "./routes/category.routes.js";
import globalErrorHandling from "./utils/errorHandling.js";
import subCategoryRouter from "./routes/subcategory.routes.js";
import brandRouter from "./routes/brand.routes.js";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import reviewRouter from "./routes/reviews.routes.js";
import wishListRouter from "./routes/wishList.routes.js";
import addressRouter from "./routes/address.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import couponRouter from "./routes/coupon.routes.js";
import morgan from "morgan";
const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/categories", categoryRouter);
app.use("/api/subCategories", subCategoryRouter);
app.use("/api/brands", brandRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/wishList", wishListRouter);
app.use("/api/addresses", addressRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.use("*", (req, res, next) => {
    next(new Error("Page Not Found", { cause: 404 }));
});

app.use(globalErrorHandling);
export default app;
