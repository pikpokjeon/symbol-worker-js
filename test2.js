onconnect = function (e)
{
    const port = e.ports[0];

    port.onmessage = function (e)
    {
        const workerResult = 'Result: ' + (e.data[0]) + (e.data[1]);
        port.postMessage(workerResult);
    }

}
