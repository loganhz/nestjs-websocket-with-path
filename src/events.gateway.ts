import { WebSocketGateway, WebSocketServer, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    path: '/api/events',
    cors: {
        origin: '*',
    },
})
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    handleEvent(
        @MessageBody()
        payload,
    ) {
        console.log(payload);
        this.server.emit('events', 'hello, ' + payload);
    }
}