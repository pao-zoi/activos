/*import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AssetModule } from './asset.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AssetModule);

  // Configurar el almacenamiento de multer
  MulterModule.register({
    storage: diskStorage({
      destination: './uploads', // Carpeta donde se guardarán las imágenes subidas
      filename: (req, file, callback) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        callback(null, `${file.fieldname}-${uniqueSuffix}`);
      },
    }),
  });

  await app.listen(3000);
}
bootstrap();*/
