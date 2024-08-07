const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/userRoute");

app.use(express.json());

//db connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB connected successfully !");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 8000, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(userRoute);