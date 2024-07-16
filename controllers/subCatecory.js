import CatchAsync from "../utils/CatchAsync.js";
import AppError from "../utils/AppError.js";
import subCategory from "./../models/subCategoryModule.js";
export const addSubCategory = CatchAsync(async (req, res, next) => {
    await subCategory.create(req.body);
    res.status(200).json({
        status: "success",
        message: "added successfully ✅",
    });
});

export const updateSubCategory = CatchAsync(async (req, res, next) => {
    const Doc = await subCategory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "updated successfully ✅",
    });
});

export const deleteSubCategory = CatchAsync(async (req, res, next) => {
    const Doc = await subCategory.findByIdAndDelete(req.params.id);
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        message: "deleted successfully ✅",
    });
});

export const GetAllSubCategory = CatchAsync(async (req, res, next) => {
    const Doc = await subCategory.find();
    if (!Doc) return next(new AppError(404, "can't find this One"));

    res.status(200).json({
        status: "success",
        Doc,
    });
});
