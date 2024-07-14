//I want to create http server using node js, so I will use http module of node js.
//Creating server will allow our web app to interact with server and get information/data from there.
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Backend is working!");
});

//We here created server in our local host port number 3000. We can access this server by typing http://localhost:3000 in our browser.

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
