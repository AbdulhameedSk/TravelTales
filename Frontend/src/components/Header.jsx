import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      navigate("/login");
      localStorage.clear();
      toast.success("Logout success");
    } catch (error) {
      alert("error in logout");
    }
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h5"
            style={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "30px",
            }}
          >
            TravelTales
          </Typography>
          {isLogin && (
            <Box display={"flex"} gap={2} marginLeft="auto" marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
                aria-label="header tabs"
              >
                <Tab label="Blogs" component={Link} to="/blogs" />
                <Tab label="My Blogs" component={Link} to="/my-blogs" />
                <Tab label="Create Blogs" component={Link} to="/create-blog" />
              </Tabs>
            </Box>
          )}
          <Box>
            <Button
              className="header-button"
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Destinations
            </Button>
            {!isLogin && (
              <>
                <Button
                  variant="contained"
                  className="header-button"
                  color="primary"
                  style={{ margin: "0 10px" }}
                  component={Link}
                  to="/register"
                >
                  Sign-up
                </Button>
                <Button
                  className="header-button"
                  variant="contained"
                  color="primary"
                  style={{ margin: "0 10px" }}
                  component={Link}
                  to="/login"
                >
                  Sign-in
                </Button>
              </>
            )}
            {isLogin && (
              <Button
                onClick={handleLogout}
                variant="contained"
                sx={{ margin: 1, color: "white" }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
