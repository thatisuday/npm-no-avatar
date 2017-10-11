const _ = require('lodash');
const gm = require('gm');
const font = __dirname + '/font.ttf';	
const materialColors = ['d32f2f', 'C2185B', '7B1FA2', '512DA8', '303F9F', '1976D2', '0097A7', '00796B', '388E3C', '689F38', 'AFB42B', 'FBC02D', 'FFA000', 'F57C00', 'E64A19', '5D4037', '616161', '455A64', 'DB9BB4', '7E4A88'];

module.exports = function(conf, cb){
	let width = _.get(conf, 'width', 150);
	let height = _.get(conf, 'height', 150);
	let text = _.toUpper(_.get(conf, 'text', 'NO').trim().replace(/\s\s+/g, ' '));
	let bgColor = _.get(conf, 'bgColor', _.sample(materialColors)).replace(/#+/g, '');
	let fontColor = _.get(conf, 'fontColor', 'FFFFFF').replace(/#+/g, '');
	let fontSize = _.get(conf, 'fontSize', '60');

	// format initials
	if(text.length > 2){
		let textParts = text.split(' ');

		if(textParts.length > 1){
			text = textParts[0].slice(0, 1) + textParts[1].slice(0, 1);
		}
		else{
			text = text.slice(0, 2);
		}
	}

	// return png image buffer
	gm(width, height, '#' + (bgColor || _.sample(materialColors)))
	.fill('#' + (fontColor || 'FFFFFF'))
	.font(font)
	.drawText(0, 0, text, 'Center')
	.fontSize(fontSize)
	.toBuffer('PNG', function(err, buffer){
		if(err) 		return cb(err, null);
						return cb(null, buffer);
	});
}
