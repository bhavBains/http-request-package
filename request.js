var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
		.on('error', function (err) {
			throw err;
		})
		.on('response', function (response) {
			console.log('response status code: ', response.statusMessage);
			console.log('response headers: ', response.headers['name'])
		})
		.pipe(fs.createWriteStream('./future.jpg'));
