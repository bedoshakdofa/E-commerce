import { Router } from "express";
import {
    addBrand,
    deleteBrand,
    GetAllBrand,
    updateBrand,
} from "./../controllers/brandController.js";
const brandRouter = Router();

brandRouter.route("/").get(GetAllBrand).post(addBrand);
brandRouter.route("/:id").patch(updateBrand).delete(deleteBrand);

export default brandRouter;
