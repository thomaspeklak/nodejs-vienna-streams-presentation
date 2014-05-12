
#PIPE

a | b | c | d

e.g.
ps aux | grep node | sort | sed -e 's/node/NODE/' 

## in Node

a.pipe(b).pipe(c).pipe(d)
