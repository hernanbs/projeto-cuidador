import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CuidadoresController } from './cuidadores.controller';
import { CuidadoresService } from './shared/cuidadores/cuidadores.service';
import { CuidadorSchema } from  './schemas/cuidadores.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{name: 'cuidadores', schema: CuidadorSchema}])
  ],
  controllers: [CuidadoresController],
  providers: [CuidadoresService]
})
export class CuidadoresModule {}
