import { worker } from './index'

const inputValue = document.getElementById('input-field');

const result = document.getElementById('result');

const worker2 = new SharedWorker("./test2.js");

inputValue.onchange = function ()
{
    worker2.port.postMessage([inputValue.value, inputValue.value]);
    console.log('send msg to worker2');
}

worker2.port.onmessage = function (e)
{
    result.textContent = e.data;
    worker.port.postMessage(e.data)
    console.log('received from worker2 and post to worker1');
}
// worker2.port.close()
