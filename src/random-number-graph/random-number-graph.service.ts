import { Injectable } from '@nestjs/common';
import { CreateRandomNumberGraphDto } from './dto/create-random-number-graph.dto';
import { UpdateRandomNumberGraphDto } from './dto/update-random-number-graph.dto';

@Injectable()
export class RandomNumberGraphService {
  create(createRandomNumberGraphDto: CreateRandomNumberGraphDto) {
    return 'This action adds a new randomNumberGraph';
  }

  findAll() {
    return `This action returns all randomNumberGraph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} randomNumberGraph`;
  }

  update(id: number, updateRandomNumberGraphDto: UpdateRandomNumberGraphDto) {
    return `This action updates a #${id} randomNumberGraph`;
  }

  remove(id: number) {
    return `This action removes a #${id} randomNumberGraph`;
  }
}
