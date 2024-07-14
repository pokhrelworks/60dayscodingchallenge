import express from "express";

const app = express();
//We need to parse the incoming request body to json.
app.use(express.json());

//We need to parse the incoming form data with this
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/add", (req, res) => {
  res.status(200).json({ data: "Data added successfully" });
  console.log(req.body);
});

app.get("/database", (req, res) => {
  res.status(200).json({ data: "Data from database" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

