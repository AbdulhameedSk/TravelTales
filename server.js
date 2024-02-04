const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();

//env_config
dotenv.config();


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//SAMPLE
app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Welcome to the API",
  });
});

//listen
const PORT = process.env.PORT || 1234;
const mode=process.env.DEV_MODE
app.listen(PORT, () => {
  console.log(`Listening at ${mode} `+PORT.bgRed);
});
