

self.intervalId = null;

self.addEventListener("message", function (event){

    const isLoop = event.data.isLoop;

    if ( isLoop ) {
        self.startIndefiniteLoop();
    } else {
        self.postMessage({"rock": "on "+self.counter});
        clearInterval(self.intervalId);
    }

}, false);

function startIndefiniteLoop() {
    var counter = 0;
    self.postMessage({"counter": counter/10000});
    var bigInteger = 1000000;
    while (counter < bigInteger) {
        self.postMessage({"counter": counter/10000});
        counter += 1;
    }
} 

// function startIndefiniteLoop() {
//     var counter = 0;
    // const t0 = performance.now();
    // self.intervalId =  setInterval( () => {
    //     const t1 = performance.now();

    //     self.counter += 1;
    // }, 200);
// }

