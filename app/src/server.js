const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const path = process.env.SOCKET_PATH || false;
const host = process.env.HOST || "0.0.0.0";

const server = http.createServer(app);

server.listen({ path, host, port }, () => {
  console.log(`Listening on ${path ? path : host + ":" + port}`);
});
