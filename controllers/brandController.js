import CatchAsync from "../utils/CatchAsync.js";
import AppError from "../utils/AppError.js";
import brand from "./../models/brendModule.js";
export const addBrand = CatchAsync(async (req, res, next) => {
    await brand.create(req.body);
    res.status(200).json({
        status: "success",
        message: "added successfully ✅",
    });
});

export const updateBrand = CatchAsync(async (req, res, next) => {
    const Doc = await brand.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "updated successfully ✅",
    });
});

export const deleteBrand = CatchAsync(async (req, res, next) => {
    const Doc = await brand.findByIdAndDelete(req.params.id);
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "deleted successfully ✅",
    });
});

export const GetAllBrand = CatchAsync(async (req, res, next) => {
    const Doc = await brand.find();
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        Doc,
    });
});
