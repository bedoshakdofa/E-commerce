import mongoose from "mongoose";

const subCategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "the name is required"],
            trim: true,
            unique: [true, "the category is unique"],
            minlength: [2, "min length is 2 charcter"],
            maxlength: [25, "max length is 25 charcter"],
        },
        image: {
            type: String,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        updatedBy: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const subcategory = mongoose.model("subcategory", subCategorySchema);

export default subcategory;
