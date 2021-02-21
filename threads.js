// This does not work on my laptop. Had to use windows command prompt and run
// set UV_THREADPOOL_SIZE=5 && node threads.js for expected behavior.
// process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
    console.log('1: ', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
    console.log('2: ', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
    console.log('3: ', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
    console.log('4: ', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
    console.log('5: ', Date.now() - start);
})


//Questions about usecases of the Threadpool.

//Can we use the threadpool for Javascript code or can only nodejs functions use it?
// - We can write custom javascript that uses the threadpool.

//What functions in node std library use the threadpool?
// - All "fs" module functions. Some crypto stuff. Depends on the operating system. Windows vs linux.

//How does this threadpool fit into the event loop?
// - Tasks running the threadpool are the pendingOperations in the loop.js example.