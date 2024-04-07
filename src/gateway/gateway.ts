import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit } from "@nestjs/websockets";
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway(80)
export default class MyGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;


  afterInit() {
    this.server.on('connection', socket => {
      this.createNewValue()
    });
  }

  @SubscribeMessage('graph')
  createNewValue() {
    const sendGraphData = () => {
      this.server.emit('graph', 'test');
      setTimeout(sendGraphData, 3000);
    };

    sendGraphData();
  }
}
