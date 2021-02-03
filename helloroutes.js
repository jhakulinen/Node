var http = require ("http")
http.createServer(function(request, response){
    
        if(request.url === "/helloworld"){
            response.writeHead(200, {"Content-Type": 'text/html'})
            response.write("<h1>Hello world in HTML</h1>")    
        } else if (request.url === "/homepage"){
            response.writeHead(200, {"Content-Type": 'text/plain'})
                response.write("HOMEPAGE")
        }
    response.end()
}).listen(8081)