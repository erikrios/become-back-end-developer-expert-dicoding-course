require('dotenv').config();
const createServer = require('./Insfrastructures/http/createServer');
const container = require('./Insfrastructures/container');

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};

start();
