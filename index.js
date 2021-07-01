const worker = new SharedWorker('./test.js',);
const inputValue = document.getElementById('input-field');

const log = document.getElementById('log');
worker.port.addEventListener('message', e =>
{
    log.textContent += e.data;

    console.log('메세지 받음', e.data)
}, true);


worker.port.start();
worker.port.postMessage('start-worker1');
// worker.port.close()

export { worker }