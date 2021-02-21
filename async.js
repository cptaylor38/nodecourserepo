const https = require('https');

const start = Date.now();
function doRequest(){
    https.request('https://www.google.com', res => {
    res.on('data', ()=> {});
    res.on('end', ()=> {
        console.log(Date.now() - start)
    })
}).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

//Potential questions about libuv operating system delegation:
//1.) What functions in node standard library use the OS's async features?
//  - Almost everything around networking for all OS's. Other stuff is OS specific.
//  - Examples: Making requests, receiving requests, or setting up a listener on some port
//              is almost all done by the operating system.    
//2.) How does this os async stuff fit into the event loop?
//  - Tasks using the underlying OS are reflected in our 'pendingOSTasks array'
