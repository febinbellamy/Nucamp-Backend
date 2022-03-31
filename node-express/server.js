const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3200;

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
// Express will automatically serve index.html for GET requests to localhost:3200

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
