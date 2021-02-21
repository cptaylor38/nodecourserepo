//node index.js
//Process and execute code in index.js file
//   - Require statements are included and executed immediately.
//Does the program still have work to do? I.e. pending OS tasks, timers, and pending operations?
// If no, exit.
// If yes: Execute these steps: (Each execution of these steps is a "tick");
//      1.) Run setTimeouts() and setIntervals()
//      2.) Run callbacks for any os tasks or threadpool tasks that are done.
//      3.) Pause and wait for processes.
//      4.) Run any setImmediate() functions.
//      5.) Handle close events.