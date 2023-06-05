import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule
    ],
    providers: [ApiService],
    controllers: [ApiController],
  })
  export class ApiModule {}