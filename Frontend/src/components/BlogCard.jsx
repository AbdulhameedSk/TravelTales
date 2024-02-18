import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default function BlogCard({
  title,
  description,
  image,
  username,
  date,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          marginTop: "20px",
          boxShadow: "9px 9px 9px 3px #888",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          transition: "0.5s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "&:active": {
            transform: "scale(0.99)",
          },
        }}
      >
        {" "}
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: theme.palette.primary.main }}
              aria-label="recipe"
            >
              {username}
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={username}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Billo Bagge Billeyaa Dagi Kargi"
        />
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
