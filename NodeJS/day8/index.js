import express from "express";
import mysql from "mysql2";

const app = express();

// Establish the MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "swargadwari3",
  database: "testdb",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

// Route to add a user
app.get("/user/add", (req, res) => {
  const { username, location } = req.query;

  // Logging to verify query parameters
  console.log("Received query parameters:", req.query);

  if (!username || !location) {
    return res.status(400).send("Username and location are required");
  }

  const query = "INSERT INTO users (username, address) VALUES (?, ?)";
  connection.query(query, [username, location], (err, result) => {
    if (err) {
      console.error("Error adding user:", err);
      return res.status(500).send("Error adding user");
    }
    console.log("User added successfully");
    res.send("User added successfully");
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
