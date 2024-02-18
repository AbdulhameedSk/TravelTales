import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/blog/user-blog/${id}`
      );
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            date={new Date(blog.createdAt).toLocaleDateString()}
          />
        ))
      ) : (
        <h1>You haven't created any blogs</h1>
      )}
    </div>
  );
};

export default UserBlogs;
