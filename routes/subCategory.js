import { Router } from "express";
import {
    addSubCategory,
    deleteSubCategory,
    GetAllSubCategory,
    updateSubCategory,
} from "./../controllers/subCatecory.js";
const subCategoryRouter = Router();

subCategoryRouter.route("/").get(GetAllSubCategory).post(addSubCategory);
subCategoryRouter
    .route("/:id")
    .patch(updateSubCategory)
    .delete(deleteSubCategory);

export default subCategoryRouter;
