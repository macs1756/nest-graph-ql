import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { RandomNumberGraphService } from './random-number-graph.service';
import { CreateRandomNumberGraphDto } from './dto/create-random-number-graph.dto';
import { UpdateRandomNumberGraphDto } from './dto/update-random-number-graph.dto';

@WebSocketGateway()
export class RandomNumberGraphGateway {
  constructor(private readonly randomNumberGraphService: RandomNumberGraphService) {}

  @SubscribeMessage('createRandomNumberGraph')
  create(@MessageBody() createRandomNumberGraphDto: CreateRandomNumberGraphDto) {
    return this.randomNumberGraphService.create(createRandomNumberGraphDto);
  }

  @SubscribeMessage('findAllRandomNumberGraph')
  findAll() {
    return this.randomNumberGraphService.findAll();
  }

  @SubscribeMessage('findOneRandomNumberGraph')
  findOne(@MessageBody() id: number) {
    return this.randomNumberGraphService.findOne(id);
  }

  @SubscribeMessage('updateRandomNumberGraph')
  update(@MessageBody() updateRandomNumberGraphDto: UpdateRandomNumberGraphDto) {
    return this.randomNumberGraphService.update(updateRandomNumberGraphDto.id, updateRandomNumberGraphDto);
  }

  @SubscribeMessage('removeRandomNumberGraph')
  remove(@MessageBody() id: number) {
    return this.randomNumberGraphService.remove(id);
  }
}
