import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorResolver } from './autor.resolver';

@Module({
  providers: [AutorResolver, AutorService],
})
export class AutorModule {}
