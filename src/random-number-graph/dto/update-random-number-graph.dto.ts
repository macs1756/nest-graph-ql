import { PartialType } from '@nestjs/mapped-types';
import { CreateRandomNumberGraphDto } from './create-random-number-graph.dto';

export class UpdateRandomNumberGraphDto extends PartialType(CreateRandomNumberGraphDto) {
  id: number;
}
