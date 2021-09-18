import {worker2} from "./input.js";

const worker = new SharedWorker('./test.js',);
const log = document.getElementById('log');


worker.port.onmessage = (res) =>
{
    log.innerHTML += res.data;
    console.log('워커1이 받은 메세지 ', res.data)
    
}

worker.port.start();



export { worker }