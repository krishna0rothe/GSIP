// src/server.js
const app = require("./app");
const { port } = require("./config/env");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
