import http from "http";

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/books":
      if (req.method === "GET") {
        res.writeHead(200);
        res.end("GET request to books");
        break;
      }
      if (req.method === "POST") {
        res.writeHead(200);
        res.end("POST request to books");
        break;
      }
    //   res.writeHead(200);
    //   res.end("You have been redirected to the books page");
    //   break;
    case "/authors":
      if (req.method === "GET") {
        res.writeHead(200);
        res.end("GET request to authors");
        break;

      }
      if (req.method === "POST") {
        res.writeHead(200);
        res.end("POST request to authors");
        break;
      }

    default:
      res.writeHead(200);
      res.end("Backend is working!");
      break;
  }
});

server.listen(2500, () => {
  console.log("Server Started");
});


// import chalk from "chalk";
