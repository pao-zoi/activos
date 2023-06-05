import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CustomHeaderMiddleware } from './custom-header.middleware';
import { AssetModule } from './asset/asset.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://ct55609:cI5cg4yJgDzvtil1@blog.pkkqspg.mongodb.net/asset"),
    ConfigModule.forRoot(),
    ApiModule,
    AuthModule,
    AssetModule,
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/ufvs-realtime', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  providers: [ApiService],
  controllers: [ApiController],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(CustomHeaderMiddleware).forRoutes('*');
  }
}
