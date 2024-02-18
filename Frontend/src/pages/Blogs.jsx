import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/blog/all-blogs"
      );
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (err) {
      console.error("Error occurred:", err);
      alert("Error in fetching blogs");
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          return (
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              username={blog.user.username}
              date={new Date(blog.createdAt).toLocaleDateString()}
            />
          );
        })}
    </div>
  );
};

export default Blogs;
