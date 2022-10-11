const http = require("http");

function onRequest(request, response){
    response.writeHead(200, {"content-type": "text/plain"});
    response.write("hello Team!");
    response.end();
}

http.createServer(onRequest).listen(8000);
//node