const json = require("./sampledata.json");
var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });
    json.push({
      name: "John Doe",
      age: "52",
      company: "Laurea",
      address: "Ratatie 22",
    });
    delete json[0];
    response.write(json);
    response.end();
  })
  .listen(8081);
