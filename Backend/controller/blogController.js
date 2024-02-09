const { default: mongoose } = require("mongoose");
const blogModel = require("../models/blogModel.js");
const userModel = require("../models/userModels.js");
exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs || blogs.length === 0) {
      return res.status(200).send({
        success: true,
        msg: "No Blogs Till Now",
      });
    }
    return res.status(200).send({
      success: true,
      msg: "GOT",
      blogCount: blogs.length,
      blogs,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      msg: "ERROR WHILE GETTING BLOGS",
      error: error.message,
    });
  }
};
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    if (!title || !description || !user) {
      res.status(400).send({
        msg: "Plese fill title or description",
      });
    }
    const exist = await userModel.findById(user);
    if (!exist) {
      return res.status(400).send({
        msg: "Unable to find user",
      });
    }

    const newBlog = new blogModel({ title, description, image });
    const session=await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({session});
    exist.blogs.push({session});
    await session.commitTransaction();
    await newBlog.save();
    return res.status(200).send({
      msg: "CREATED",
      newBlog,
    });
  } catch (error) {
    return res.status(400).send({
      success: "false",
      msg: "UNABLE TO CREATE BLOG",
      error: error.message,
    });
  }
};
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, image } = req.body;
    // Check if the required fields are missing
    if (!title && !description && !image) {
      return res.status(400).send({
        success: false,
        msg: "Please provide at least one field to update",
      });
    }

    // Construct an object containing the fields to update
    const updateFields = {};
    if (title) updateFields.title = title;
    if (description) updateFields.description = description;
    if (image) updateFields.image = image;

    // Find and update the blog by ID
    const updatedBlog = await blogModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    // Check if the blog with the provided ID exists
    if (!updatedBlog) {
      return res.status(404).send({
        success: false,
        msg: "Blog not found",
      });
    }

    // Send the updated blog as response
    return res.status(200).send({
      success: true,
      msg: "Blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    // Handle errors
    return res.status(400).send({
      success: false,
      msg: "Error in updating blog",
      error: error.message,
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(200).send({
        msg: "no such blog",
      });
    }
    return res.status(200).send({
      blog,
    });
  } catch (error) {
    return res.status(400).send({
      msg: "ERROR",
      error: error.message,
    });
  }
};
exports.deleteBlogController = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findByIdAndDelete(id);
    return res.status(200).send({
      msg: "Deleted Successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(400).send({
      msg: "ERROR IN DELETING",
      error: error.message,
    });
  }
};
