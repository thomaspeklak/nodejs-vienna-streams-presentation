var through = require('through');

process.stdin.pipe(through(function (buf) {
    this.push(buf.toString().toUpperCase());
}, function () {
    //end
})).pipe(process.stdout);

// (echo 'hello'; sleep 1; echo 'nodejs vienna') | node presentation17.js
