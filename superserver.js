var http = require("http");


var PORT1 = 7000;
var PORT2 = 7500;


function handleRequest(request, response){
    if (request == PORT1) {
        response.end("You are so intelligent. I always learn something new when I see you.");
    }if (request == PORT2){
        response.end("Please take a shower and brush your teeth, smelly cat.");
    }
};
var server = http.createServer(handleRequest);

// Listener (starts our server)
server.listen(PORT1, function(){

    console.log("I am now listening at PORT: " + PORT1);

})
server.listen(PORT2, function(){

    console.log("I am now listening at PORT: " + PORT2);

})