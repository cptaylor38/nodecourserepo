//Improving Node Performance
//Use Node in "Cluster" mode.

//Not tricking Node into starting up multiple threads,
//but starting up multiple copies and getting multiple 
//instances of the event loop.

//Nodemon does not work well with clustering.

//Cluster mode is the recommended approach.

//Use worker threads.
//Use the threadpool set up by libuv.

//Worker Threads are more experimental.
