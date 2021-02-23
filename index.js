// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
// const {Worker} = require('worker_threads');
// worker_threads module not found despite import per node docs.
// skipping worker threads section, outdated course material

//Autocannon docs https://github.com/mcollina/autocannon#install
//To manually kill the node server
//ps aux | grep node
//kill -9 [second number from left for process id]
//command to run autocannon
//autocannon -c [number of connections] -d [the number of seconds to run autocannon] -p [number of pipelined requests to use] [url of server]

//first time we execute file, is file being executed in master mode?
// if(cluster.isMaster){
//     //Cause file to be executed again, but in child mode.
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//       }
// }
// else {
    //Child - acts like a server and does nothing else.

    //Testing to see how many I needed on windows to show different workers. Seemed to work 
    //          at * + 4 additional.


    // app.listen(3000);
// }


// const express = require('express');
//     const app = express();
//     const crypto = require('crypto');
    
//     app.get('/', (req, res)=> {
//         const worker = new Worker(function(){
//             this.onMessage = function(){
//                 let counter = 0;
//                 while(counter < 1e9){
//                     counter++;
//                 }
//                 postMessage(counter);
//             }
//         })
//         worker.on('message', function(message){
//             res.send(message.data);
//         })
//     })

//     app.get('/1', (req, res)=> {
//         res.send('worker id: ' + cluster.worker.id);
//     })
//     app.get('/2', (req, res)=> {
//         res.send('worker id: ' + cluster.worker.id);
//     })
    

//     app.listen(3000);

    //pm2 start index.js -i 0 (i being number of instances to create, 0 being set for it to auto adjust)
    //pm2 delete index to kill running instances
    //pm2 show index - get a more detailed list of each child
    //pm2 monit - interface to inspect logs being emitted by the different processes