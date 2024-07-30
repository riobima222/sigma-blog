import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Connect on port ${port}`);
});
