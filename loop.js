//node myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

//represents the process of myFile running
//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    //Node runs 3 checks to determine whether or not to continue running a program.

    //Check one: Any pending setTimeout, setInterval, or setImmediate?
    //Check two: Any pending operating system tasks? Ex. Http server listening to requests on some port.
    //Check three: Any long running operations still being executed inside program? Ex. function call inside Fs module to read a file off the harddrive.
    return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

//represents event loop belongging to the run contents process
while(shouldContinue()){
//everytime the body of this runs is referred to as a "tick"

//1.) Node looks at pendingTimers and looks for any functions ready to be called. setTimeout, setInterval
//2.) Node looks at pending OS tasks and pending operations and calls relevant callbacks.   
//      Ex. Callback to handle an incoming http request, or a callback to handle a file that's been retrieved.
//3.) Node termporarily pauses execution and will continue when...
//       A new pending OS task is done, a new pending operation is done, or a timer is about to complete.

//       Ex. A new request has came in on a port we're listening to or fetching some file off harddrive.

//See that something is about to occur.

//4.) Looks at pending timers. setImmediate. Call any setImmediate.
//5.) Handle any "close" events.


}

//exit back to terminal


//Is Node single-   threaded?

//The Node Event loop IS single threaded but SOME of the functions included in the Node standard library 
// are not single-threaded. I.e. - Some of those functions run outside of the instance of the thread and
//      the event loop.