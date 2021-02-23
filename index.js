const cluster = require('cluster');

//Autocannon docs https://github.com/mcollina/autocannon#install
//To manually kill the node server
//ps aux | grep node
//kill -9 [second number from left for process id]
//command to run autocannon
//autocannon -c [number of connections] -d [the number of seconds to run autocannon] -p [number of pipelined requests to use] [url of server]

//first time we execute file, is file being executed in master mode?
if(cluster.isMaster){
    cluster.fork();
    //Cause file to be executed again, but in child mode.
}
else {
    //Child - acts like a server and does nothing else.

    const express = require('express');
    const app = express();
    const crypto = require('crypto');
    
    app.get('/', (req, res)=> {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
            res.send('worker id: ' + cluster.worker.id);
        })
    })
    app.get('/1', (req, res)=> {
        res.send('worker id: ' + cluster.worker.id);
    })
    app.get('/2', (req, res)=> {
        res.send('worker id: ' + cluster.worker.id);
    })
    app.get('/3', (req, res)=> {
        res.send('worker id: ' + cluster.worker.id);
    })
    app.get('/4', (req, res)=> {
        res.send('worker id: ' + cluster.worker.id);
    })

    //Testing to see how many I needed on windows to show different workers. Seemed to work 
    //          at * + 4 additional.


    app.listen(3000);
}
