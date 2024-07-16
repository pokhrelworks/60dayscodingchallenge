//This is the route file to access the books end url like /books, /books/:id, /books/:id/:author
import express from "express";
import validateToken from "../Middlewares/validateToken.js";

//express.Router() is a function that returns an instance of a router. We can add routes to this router and then export it.
const router = express.Router();

router.use((req, res, next) => {
  validateToken(req, res, next);
});

router.get("/", (req, res) => {
  res.status(200).send("Books data");
});

// router.get("/:id", (req, res) => {
//   //:id is a dynamic parameter
//   const id = req.params.id; // Access the `id` parameter from the URL
//   res.status(200).send(`Book with id ${id}`);
// });

// router.get("/:id/:author", (req, res) => {
//   //:id and :author are dynamic parameters
//   const id = req.params.id; // Access the `id` parameter from the URL
//   const author = req.params.author; // Access the `author` parameter from the URL
//   res.status(200).send(`Book with id ${id} and author ${author}`);
// });

//Handeling query parameters
router.get("/delete/:id/:author90", (req, res) => {
  //   console.log(req.query);
  //   const { id,name,address } = req.query;
  //   console.log(id,name,address);
  console.log(req.params);
  res.status(200).send("Delete book");
});
export default router; //exporting the router instance

//When using POST request we do is req.body to get the data from the body of the request.
