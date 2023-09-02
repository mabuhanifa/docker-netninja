const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello from express api",
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
