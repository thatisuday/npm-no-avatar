const _ = require('lodash');
const fs = require('fs');
const gm = require('gm');
const font = __dirname + '/font.ttf';
const make = require('./make');

module.exports = function(req, res){
	make(req.query, function(err, buffer){
		if(err) return res.status(500).send(err);
		
		res.set('Content-Type', 'image/png');
		res.send(buffer);
	});
}