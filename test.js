
onconnect = (e) =>
{
    const port = e.ports[0];
    port.postMessage('on-worker1');
    port.onmessage = function (e)
    {
        let result = (e.data);
        port.postMessage(result);
        port.postMessage('received');


    }
}