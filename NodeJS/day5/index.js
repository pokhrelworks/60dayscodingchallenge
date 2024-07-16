import express from "express";
import booksRouter from "./Routes/books.route.js";
import { rateLimit } from 'express-rate-limit'

const app = express();

//Theses are the example of inbuilt middleware functions in express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public")); //This is how you serve static files in express


//Third party middleware function
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

//This is how you declare middleware function in express
app.use((req, res, next) => {
  console.log("Middleware function");
  next();
});


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
