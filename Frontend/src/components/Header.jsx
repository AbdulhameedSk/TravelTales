import React from "react";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h5"
            style={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px", fontSize:"30px" }}
          >
            TravelTales
          </Typography>
          <Box>
            <Button
              className="header-button"
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              className="header-button"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Destinations
            </Button>
            <Button
             className="header-button"
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              My Blogs
            </Button>
            <Button
             className="header-button"
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
