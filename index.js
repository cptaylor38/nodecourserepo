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
    res.send('hello');
})

app.listen(3000);