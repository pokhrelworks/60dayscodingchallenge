import express from "express";
import booksRouter from "./Routes/books.route.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/database", (req, res) => {
  res.status(200).json({ data: "Data from database" });
});

app.use("/books", booksRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//To summarize all these thigs whenever we hit the url as specified the function pointint to that url will be executed and task in that function will be performed.
