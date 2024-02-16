import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({ name: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8080/api/v1/user/register",
        {
          username: input.name,
          email: input.email,
          password: input.password,
        }
      );

      if (data.success) {
        alert("SUCCESS");
        navigate("/login");
      } else {
        alert("Registration failed"); // Handle unsuccessful registration
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log any errors that occur during the request
      alert("An error occurred while registering. Please try again later.");
    }
    console.log(input);
  };


  
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        boxShadow={24}
        padding={2}
        bgcolor="background.paper"
        borderRadius={2}
      >
        <Typography component="h1" variant="h5" style={{ color: "black" }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="name"
            autoComplete="username"
            autoFocus
            value={input.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={input.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={input.password}
            onChange={handleChange}
          />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>Already Registered? Please Login</Button>
          </Link>{" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
