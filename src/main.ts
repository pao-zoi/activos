import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('activo example')
    .setDescription('The activo API description')
    .setVersion('1.0')
    .addTag('apiAuth')
    .addTag('asset')
    .addTag('ufv')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
   
    swaggerOptions:{
      filter:true,
      showRequestDuration: true,
    }
  });
  await app.listen(8080,'0.0.0.0');
}
bootstrap();
