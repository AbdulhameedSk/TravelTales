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
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const [value, setValue] = useState();

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
              <Button variant="contained" sx={{ margin: 1, color: "white" }}>
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
