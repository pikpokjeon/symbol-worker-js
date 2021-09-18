
onconnect = (e) =>
{
    const port = e.ports[0];
    port.postMessage('worker1-connected>');
    port.onmessage = (res) =>
    {
        let result = (res.data);
        let date = new Date()
        let [h,m,s] = [date.getHours(),date.getMinutes(),date.getSeconds()]
        port.postMessage(`<div>[${h}:${m}:${s}]>${result}</div>`);
    }
}