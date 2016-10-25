// Built in module for running HTTP
var http = require("http");

// Port (access number)
var PORT = 7500;

// Function for handling requests and responses
function handleRequest(request, response){

    response.end("Please take a shower and brush your teeth, smelly cat.");

}

// Create the server
var server = http.createServer(handleRequest);

// Listener (starts our server)
server.listen(PORT, function(){

    console.log("I am now listening at PORT: " + PORT);

})