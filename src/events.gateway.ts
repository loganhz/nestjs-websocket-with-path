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
        const out = 'hello, ' + payload;
        console.log(payload);
        // uncomment it if you would like to use socket.io-client
        // this.server.emit('events', 'hello, ' + out);
        return out;
    }
}