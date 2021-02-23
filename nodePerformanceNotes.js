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


//Clustering and Node Start-up

//Node start up without clustering
//node file.js -> looks at the file -> starts up instance of the application

//Node with clustering
//node file.js -> looks at the file -> starts up cluster manager -> cluster manager starts up worker 
//      instances created by requiring in the cluster module. .fork() in cluster module 
//      node internally goes back to the file.js and executes it a second time and starts up worker instance

//When forking off to additional worker instances, isMaster is set to false.
