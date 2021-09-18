import {worker} from './index.js'

const worker2 = new SharedWorker("./test2.js");
const id = n =>  document.getElementById(n)


id('submit').onclick = () =>
{
    const inputValue = id('input-field').value
    // worker2에 메세지 전달
    worker2.port.postMessage([inputValue]);

    // test2.js에서 가공된 데이터 받음
    worker2.port.onmessage = (res) =>
    {
        result.textContent = res.data;
        // worker1에게 메세지 전달 test.js로.
        worker.port.postMessage(res.data)
        console.log('received from worker2 and post to worker1');
    }

}


id('close1').onclick = (e) => worker.port.close()
id('close2').onclick = (e) => worker2.port.close()

export {worker2}