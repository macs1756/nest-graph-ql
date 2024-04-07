import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit } from "@nestjs/websockets";
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway(80, {
  cors: {
    origin: 'http://localhost:3000/'
  }
})
export default class MyGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  //inherited from core
  afterInit() {

    //listen connect fronend
    this.server.on('connection', socket => {
      this.createNewValue()
    });
  }

  //event to subscribe
  @SubscribeMessage('graph')
  createNewValue() {
    const sendGraphData = () => {
      
      const randomValue = Math.floor(Math.random() * 100) + 1

      //give back
      this.server.emit('graph', randomValue);

      setTimeout(sendGraphData, 3000);
    };

    sendGraphData();
  }
}
