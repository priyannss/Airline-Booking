const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on port ${ServerConfig.PORT}`);
  // Logger.info("Server started successfully", {});
});