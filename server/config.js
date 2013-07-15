var path = require("path");

module.exports = {
  server: {
    listenPort: 8080,        // The port on which the server is to listen (means that the app is at http://localhost:3000 for instance)
    clientRoot: './../client' // the place from where we will serve our static resources
  }
};