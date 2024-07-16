import CatchAsync from "../utils/CatchAsync.js";
import AppError from "../utils/AppError.js";
import category from "./../models/categoryModule.js";
export const addCategory = CatchAsync(async (req, res, next) => {
    await category.create(req.body);
    res.status(200).json({
        status: "success",
        message: "added successfully ✅",
    });
});

export const updateCategory = CatchAsync(async (req, res, next) => {
    const Doc = await category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "updated successfully ✅",
    });
});

export const deleteCategory = CatchAsync(async (req, res, next) => {
    const Doc = await category.findByIdAndDelete(req.params.id);
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "deleted successfully ✅",
    });
});

export const GetAllCategory = CatchAsync(async (req, res, next) => {
    const Doc = await category.find();
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        Doc,
    });
});
