const fs = require('fs');
const { make } =  require(__dirname + '/../');

make({
	width: 300,
	height: 200,
	fontColor: '#e8ccd1',
	fontSize: '120',
	text: 'UH'
}, function(err, buffer){
	if(err) return console.log(err);
			return fs.writeFileSync(__dirname + '/avatar.png', buffer);
});