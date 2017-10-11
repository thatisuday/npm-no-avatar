## no-avatar | Generate Avatar with Initials in Node.js
Module and Express middleware to generate avatar image with initials

![](https://img.shields.io/npm/v/no-avatar.svg?style=flat-square)
![](https://img.shields.io/npm/dt/no-avatar.svg?style=flat-square)
![](https://img.shields.io/github/issues/thatisuday/no-avatar.svg?style=flat-square)
![](https://img.shields.io/david/thatisuday/no-avatar.svg?style=flat-square)
![](https://img.shields.io/gratipay/project/no-avatar.svg?style=flat-square)


![](https://i.imgur.com/CuCBdL1.jpg)

## Install 
npm i -S no-avatar

## Install GraphicsMagick
http://www.graphicsmagick.org/download.html

> test installation by running `gm -version` command

***

## Use as express middleware (server implementation)
```
const { middleware } = require('no-avatar');
app.get('/avatar.png', middleware);
```

> Accessing `/avatar.png` route will return a png image. You can configure image by adding options in query parameters as below.


## Make avatar manually (Get buffer)

```
const fs = require('fs');
const { make } = require('no-avatar');

make(options, function(err, buffer){
	if(err) return console.log(err);
			return fs.writeFileSync(__dirname + '/avatar.png', buffer);
});
```


## Save avatar (Save to a file)

```
const { save } =  require('no-avatar');
const savePath = __dirname + '/avatar.png';

save(savePath, options, function(err){
	if(err) return console.log(err);
			return console.log('avatar.png saved at path ' + savePath);
});
```

## options (also query object)
- width (integer) : Pixel image width. Default 150.
- height (integer) : Pixel image height. Default 150.
- text (string) : name initials. You can pass name as well, initials will be created automatically. By default, 'NO' is used.
- bgColor (hex color code) : Background color of image. No need to add pound (#) sing, will be added automatically. By default, background color is chosen randomly from a pallet.
- fontColor (hex color code) : Text (font) color. No need to add pound (#) sing, will be added automatically. By default, font color is `ffffff` (white).
- fontSize (integer) : Pixel text (font) size. Default is 60;

***

### Test : Express Middleware
Run `node demo/server.js` and visit `http://localhost:80/avatar.png?text=UH&fontSize=80`

### Test : Manual making
Run `node demo/make.js` and check `avatar.png` in that folder.

### Test : Saving to a file
Run `node demo/save.js` and check `avatar.png` in that folder.
