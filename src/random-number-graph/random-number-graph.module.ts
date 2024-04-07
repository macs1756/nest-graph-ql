import { Module } from '@nestjs/common';
import { RandomNumberGraphService } from './random-number-graph.service';
import { RandomNumberGraphGateway } from './random-number-graph.gateway';

@Module({
  providers: [RandomNumberGraphGateway, RandomNumberGraphService],
})
export class RandomNumberGraphModule {}
