var fs = require('fs');
var zip = require('zlib');
// var gzip = zip.createGzip();
var unzip = zip.createGunzip();

// var readable = fs.createReadStream('./bigimage.jpg');
// var compressed = fs.createWriteStream('zipped.jpg.gz');

// readable.pipe(compressed);
var readable = fs.createReadStream('./zipped.jpg.gz');
var compressed = fs.createWriteStream('zipped.jpg.gz');



readable.pipe(compressed);