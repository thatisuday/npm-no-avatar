const express = require('express');
const app = express();
const { middleware } =  require(__dirname + '/../');

app.get('/avatar.png', middleware);

app.listen(3000, function(){
	console.log('no-avatar server is listening on port 3000. Visit http://localhost:3000/avatar.png?text=UH&fontSize=80');
});