// Run `npm install socket.io-client` first

import { io } from 'socket.io-client';

const socket = io('https://xxx-xxx-xxxxxx.cn-hangzhou.fcapp.run', {
    path: '/api/events',
});

socket.on('connect', function () {
    console.log('Connected');
    socket.emit('events', 'logan');
});

socket.on('events', function (data) {
    console.log(data);
});