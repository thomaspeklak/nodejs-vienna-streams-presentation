
//Create a readable stream

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('nodejs ');
rs.push('vienna\n');
rs.push(null); //tells the consumer that rs is done

rs.pipe(process.stdout);
