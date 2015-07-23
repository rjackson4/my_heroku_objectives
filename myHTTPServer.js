var http = require('http');
var dispatch = require('dispatch')
var port = 8080;

var handleRequest = function(request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	//response.write('{Message: Message Received} ');
	//response.end('It Works!! Path Hit: ' + request.url);
	response.end('{"Message": "Message Received"}');
}

var server = http.createServer(
	dispatch({
		'/': function(request, response) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end('{"Message": "Message Received"}');
		},
		'/:id': function(request, response, id) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end('{"Message": "Message received from id: ' + id + ' }');
		}
	})
);

server.listen(port, function() {
	console.log("Server listening on: http://localhost:%s", port);
});