const { save } =  require(__dirname + '/../');
const savePath = __dirname + '/avatar.png';

save(savePath, {
	width: 300,
	height: 300,
	fontSize: 120,
	text: 'UH'
}, function(err){
	if(err) return console.log(err);
			return console.log('avatar.png saved at path ' + savePath);
});