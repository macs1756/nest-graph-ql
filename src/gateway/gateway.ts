import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayInit } from "@nestjs/websockets";
import { Server } from 'socket.io';

@WebSocketGateway(80, {
  cors: {
    origin: '*'
  }
})
export default class MyGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  //inherited from core
  afterInit() {

    //listen connect frontend
    // this.server.on('connection', socket => {
    //   this.createNewValue()
    // });

    this.createNewValue()
  }

  //event to subscribe
  @SubscribeMessage('graph')
  createNewValue() {
    const sendGraphData = () => {
      
      const randomValue = Math.floor(Math.random() * 100) + 1

      //give back
      this.server.emit('graph', randomValue);

      setTimeout(sendGraphData, 1000);
    };
    sendGraphData()
  }
}
