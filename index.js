const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./servers/routes/auth");
const {authorize} = require("./servers/middlewares/Auth");
const profile = require("./servers/routes/profile");
const breakfast = require("./servers/routes/breakfast");
const lunch = require("./servers/routes/lunch");
const dinner = require("./servers/routes/dinner");
const getlog = require("./servers/routes/getlog");
const getcal=require('./servers/routes/getcal');

const app = express();

const { NODE_PORT, NODE_ENV, DATABASE_URL } = process.env;
const PORT = process.env.PORT || NODE_PORT || 8000;

const isDevelopment = NODE_ENV === "development";

if (isDevelopment) {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

if (isdevelopement) {
  // production
  // app.use(cors({ origin: CLIENT_URL, optionsSuccessStatus: 200 }));
  app.use(cors());
}
app.use(express.static(path.join(__dirname, "/fitnesscare/build")));

// In case frontend is being rendered from nodejs

app.use("/api", authRoutes);
app.use("/api/user",authorize, profile);
app.use("/api/user/log",authorize,breakfast);
app.use("/api/user/log",authorize,lunch);
app.use("/api/user/log",authorize,dinner);
app.use("/api/user/log",authorize,getlog);
app.use('/api/user/cal',authorize,getcal);

// app.use("/api", authRoutes);
// app.use("/api/user", profile);
// app.use("/api/user/log",breakfast);
// app.use("/api/user/log",lunch);
// app.use("/api/user/log",dinner);
// app.use("/api/user/log",getlog);
// app.use('/api/user/cal',getcal);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/fitnesscare/build/index.html"));
});

mongoose
  .connect(DATABASE_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`DB connected and the server is runnning at ${PORT}-${NODE_ENV}`);
    });
  })
  .catch((err) => {
    console.error("Db connection failed", err);
  });
