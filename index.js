const cluster = require('cluster');

//first time we execute file, is file being executed in master mode?
if(cluster.isMaster){
    cluster.fork();
    //Cause file to be executed again, but in child mode.
    cluster.fork();
    cluster.fork();
    cluster.fork();
}
else {
//Child - acts like a server and does nothing else.

const express = require('express');
const app = express();

function doWork(duration){
    //purpose of this function is to use as much cpu processing power for a set duration
    const start = Date.now();
    while(Date.now() - start < duration){
        //Attempting to run the while loop as fast as possible.
        //No other actions can be completed while this is running.
    }
}

app.get('/', (req, res)=> {
    doWork(5000);
    //This gets executed during the event loop.
    res.send('worker id: ' + cluster.worker.id);
})

app.get('/1', (req, res)=> {
    //not working on Windows - looking for alternative.
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
