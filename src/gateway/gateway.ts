import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class myGateWay{

  @SubscribeMessage('newMessage')
  onNewMessage (@MessageBody() body: any) {
    console.log(body);
  }
}
