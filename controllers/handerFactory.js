// import CatchAsync from "./../utils/CatchAsync.js";
// import AppError from "./../utils/AppError.js";
// export const addOne = (Model) => {
//     return CatchAsync(async (req, res, next) => {
//         await Model.create(req.body);
//         res.status(200).json({
//             status: "success",
//             message: "added successfully ✅",
//         });
//     });
// };

// export const updateOne = (Model) => {
//     return CatchAsync(async (req, res, next) => {
//         const Doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//         });
//         if (!Doc) return next(new AppError(404, "can't find this One"));

//         res.status(200).json({
//             status: "success",
//             message: "updated successfully ✅",
//         });
//     });
// };

// export const DeleteOne = (Model) => {
//     return CatchAsync(async (req, res, next) => {
//         const Doc = await Model.findByIdAndDelete(req.params.id);
//         if (!Doc) return next(new AppError(404, "can't find this One"));

//         res.status(200).json({
//             status: "success",
//             message: "deleted successfully ✅",
//         });
//     });
// };

// export const GetAll = (Model) => {
//     return CatchAsync(async (req, res, next) => {
//         const Doc = await Model.find();
//         if (!Doc) return next(new AppError(404, "can't find this One"));

//         res.status(200).json({
//             status: "success",
//             Doc,
//         });
//     });
// };
