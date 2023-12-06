const socket = new WebSocket(
    "wss://xxx-xxx-xxxx.cn-hangzhou.fcapp.run/api/events"
);
socket.onopen = function (event) {
    socket.send(
        JSON.stringify({
            event: "events",
            data: "xxxxxx",
        })
    );
};
socket.onmessage = function (event) {
    console.log(event);
};