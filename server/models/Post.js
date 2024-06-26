import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      task: {
         type: String,
         required: true,
      },
      executor: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
      file: {
         type: String,
      },
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

export default mongoose.model("Post", PostSchema);
