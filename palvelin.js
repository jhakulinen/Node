var http = require ("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
        response.write("<h1>This is response.write</h1><br>")
        response.write("<table><tr><th>Name</th><th>Address</th><th>City</th></tr><tr><td>Matti Meikalainen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr><tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>")

    response.end('Hello World!');
}).listen(8081);