import { Server as SocketIOServer } from 'socket.io';
import { createServer } from 'http'; // If needed

import Redis from 'ioredis';

const pub = new Redis({

});
const sub = new Redis();

class SocketServer {
    private _io: SocketIOServer;

    constructor(httpServer: any) {
        console.log("Init Socket Server");
        this._io = new SocketIOServer(httpServer, {
            cors: {
                allowedHeaders: ['*'],
                origin: '*',
            },
        });
        sub.subscribe('MESSAGES')
    }

    public initListeners() {
        const io = this.io;
        console.log("Socket Server is listening for connections");

        io.on("connect", (socket) => {
            console.log(`New Socket Connected: ${socket.id}`);

            socket.on('event:message', async ({ message }: { message: string }) => {
                console.log(`Received message: ${message}`);

                await pub.publish('MESSAGES', JSON.stringify({ message }));
            });
        });

        sub.on('message', (channel, message) => {
            if(channel === "MESSAGE"){
                io.emit('messages', message);
            }
        })
    }

    get io() {
        return this._io;
    }
}

export default SocketServer;
