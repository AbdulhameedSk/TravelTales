import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from 'react-hot-toast';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const [input, setInput] = useState({ password: "", email: "" });
  const dispatch = useDispatch();
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
        "http://localhost:8080/api/v1/user/login",
        {
          email: input.email,
          password: input.password,
        }
      );

      if (data.success) {
        localStorage.setItem('userId', data?.user._id);
        dispatch(authActions.login());
        toast.success("Login Success");
        navigate("/");
      } else {
        alert("Registration failed"); // Handle unsuccessful registration
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log any errors that occur during the request
      alert(error);
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
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
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button>Not Registered Yet? Please Register</Button>
          </Link>{" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
