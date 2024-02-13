import React from "react";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#111" }}>
        <Toolbar>
          <Typography
            variant="h5"
            style={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px" }}
          >
            TravelTales
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
