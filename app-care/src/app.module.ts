import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { CuidadoresModule } from './cuidadores/cuidadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db_cuidador'),
    CuidadoresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
