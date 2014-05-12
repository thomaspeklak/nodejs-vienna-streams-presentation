
var fs = require('fs');
var ws = fs.createWriteStream('/tmp/message.txt');

ws.write('hello ');
ws.end('NodeJs Vienna\n');
