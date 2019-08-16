const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const connection = require("./database/index");
const cookieParser = require("cookie-parser");
const defaultRoute = "/api/v1";

app.use(cookieParser());
app.use(cors(require("./helpers/corsOption")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(`${defaultRoute}/auth`, require("./database/routes/authroutes"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
