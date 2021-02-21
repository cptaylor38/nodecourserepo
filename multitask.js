const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest(){
    https.request('https://www.google.com', res => {
    res.on('data', ()=> {});
    res.on('end', ()=> {
        console.log(Date.now() - start)
    })
}).end();
}

function doHash(){
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
        console.log('Hash: ', Date.now() - start);
    })
}

doRequest();

fs.readFile('multitask.js', 'utf8', ()=> {
    console.log('FS: ', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();

//Result of running this is:
// Http request
// Hash
// FS
// Hash
// Hash
// Hash

//The http request is handled by the operating system while the FS module is assigned 
//      to threads in the threadpool.


//Read file call is doing internally:
// fs.readFile called.
// Node gets stats on the file. Tries to find out filesize, etc.
// Harddrive accessed and stats returned. First trip to the harddrive.
// Node requests to read the file. 
// Harddrive accessed and file contents returned back to app. Second trip to the harddrive.
// Node returns file contents to us.
//      Two distinct pauses waiting on harddrive access and retrieval.

