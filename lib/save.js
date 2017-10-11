const fs = require('fs');
const make = require('./make');

module.exports = function(savePath, conf, cb){
	make(conf, function(err, buffer){
		if(err) return cb(err);
				return fs.writeFile(savePath, buffer, function(_err){
					if(_err)	return cb(_err);
								return cb();
				});
	});
}


