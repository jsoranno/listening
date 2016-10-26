var http = require("http");


var PORT1 = 7000;
var PORT2 = 7500;


function handleRequest(request, response){
    console.log(request);
        response.end("You are so intelligent. I always learn something new when I see you.");
};
function handleRequest2(request, response){
        response.end("Please take a shower and brush your teeth, smelly cat.");
};
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Listener (starts our server)
server1.listen(PORT1, function(){

    console.log("I am now listening at PORT: " + PORT1);

})
server2.listen(PORT2, function(){

    console.log("I am now listening at PORT: " + PORT2);

})