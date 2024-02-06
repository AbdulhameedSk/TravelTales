const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title Rrquired"],
    },
    description: {
      type: String,
      required: [true, "Description Rrquired"],
    },
    image: {
      type: String,
      required: [true, "Image Required"],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,"user ID required"]
    }
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
