var json = require("./sampledata.json");
var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<table border='1'>");
    for (i = 0; i < json.length; i++) {
      response.write("<tr>");
      response.write("<td>" + json[i].name + "</td>");
      response.write("<td>" + json[i].age + "</td>");
      response.write("<td>" + json[i].company + "</td>");
      response.write("<td>" + json[i].address + "</td>");
      response.write("</tr>");
    }
    response.end();
  })
  .listen(8081);
