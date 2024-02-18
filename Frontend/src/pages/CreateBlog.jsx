import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const CreateBlog = () => {
    const userId=localStorage.getItem("userId");
    const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(inputs);
    try{
        const {data}=await axios.post("http://localhost:8080/api/v1/blog/create-blog",{
            title:inputs.title,
            description: inputs.description,
            image: inputs.image,
            user:userId
        });
        if(data?.success){
            alert("Blog created successfully");
            navigate('/my-blogs');
        }
    }catch(error){
        console.log(error);    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        width="30%"
        borderRadius={10}
        padding={5}
        boxShadow="19px 19px 9px 3px #888"
        bgcolor="#f9f9f9"
        color="black"
        transition="all 0.3s ease"
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          marginBottom={3}
        >
          Create Blog Here
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={inputs.title}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          multiline
          rows={4}
          value={inputs.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Image URL"
          variant="outlined"
          name="image"
          value={inputs.image}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: 20, backgroundColor: "black" }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default CreateBlog;
