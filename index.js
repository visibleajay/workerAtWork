
"use strict";

let progressBar = document.getElementById("progress");

function startIndefiniteLoop() {
    var counter = 0;
    progressBar.style.width = "0%";
    var bigInteger = 1000000;
    while (counter < bigInteger) {
        progressBar.style.width = `${counter/10000}%`
        counter += 1;
    }
} 

const worker = new Worker("worker1.js");

worker.addEventListener("message", function (event) {
    if ( event.data && event.data.hasOwnProperty("counter") ) {
        progressBar.style.width = `${event.data["counter"]}%`;
    }
});

function startIndefiniteInThread() {
    worker.postMessage({
        "isLoop": true
    });
}

function stopIndefiniteLoop() {
    worker.postMessage({
        "isLoop": false
    });
}

function terminateWorkers() {
    worker.terminate();
}
