var axios = require("axios")
var http = require("http")
var data
const promise = axios
    .get("http://www.omdbapi.com/?t=Sons+Of+Anarchy&apikey=ceec147d")
        .then((response) => {
            data = response.data;
            //console.log(data.Title)
            //console.log(data.Year)
            //console.log(data.Genre)
            //console.log(data.Writer)
            //console.log(data.Actors)
            //console.log(data.Plot)
            //console.log(data.Poster)
        });

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<table border='1'>");
      response.write("<tr>");
      response.write("<th>Title</th><th>Year</th><th>Genre</th><th>Writer</th><th>Actors</th><th>Plot</th><th>Poster</th></tr>");
      response.write("<tr>")
      response.write("<td>" + data.Title + "</td>");
      response.write("<td>" + data.Year + "</td>");
      response.write("<td>" + data.Genre + "</td>");
      response.write("<td>" + data.Writer + "</td>");
      response.write("<td>" + data.Actors + "</td>");
      response.write("<td>" + data.Plot + "</td>");
      response.write('<td><img src="' + data.Poster + '>"</td>');
      response.write("</tr>");
    
    response.end();
  })
  .listen(3000);