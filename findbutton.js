
//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
var dash_button = require('node-dash-button');
var http = require('http');
console.log("running");

var dash = dash_button("0:0c:29:bc:0f:6e", null, 10000, 'udp');
dash.on("detected", function (){
    console.log("omg found");

    // http://localhost:5005/Office/next

    var options = {
	  host: '127.0.0.1',
	  port: '5005',
	  path: '/Office/next'
	};

	callback = function(response) {
	  var str = '';
	  response.on('data', function (chunk) {
	    str += chunk;
	  });
	  response.on('end', function () {
	    console.log(JSON.stringify(str));
	  });
	}

	http.request(options, callback).end();

});