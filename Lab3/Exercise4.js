var fs = require('fs');
var zip = require('zlib');
 var gzip = zip.createGzip();
var unzip = zip.createGunzip();

// var readable = fs.createReadStream('./bigimage.jpg');
// var compressed = fs.createWriteStream('zipped.jpg.gz');

// readable.pipe(gzip).pipe(compressed);
var readable = fs.createReadStream(__dirname + '/zipped.jpg.gz');
var compressed = fs.createWriteStream('unZipped.jpg');

readable.pipe(unzip).pipe(compressed);