import { Router } from "express";
import {
    addCategory,
    deleteCategory,
    GetAllCategory,
    updateCategory,
} from "../controllers/categoryController.js";
const categoryRouter = Router();

categoryRouter.route("/").get(GetAllCategory).post(addCategory);
categoryRouter.route("/:id").patch(updateCategory).delete(deleteCategory);

export default categoryRouter;
