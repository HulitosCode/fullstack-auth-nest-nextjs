import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT ?? 3001);
  // Habilitar CORS para todos os domínios ou um domínio específico
  app.enableCors({
    origin: 'https://fullstack-auth-nest-nextjs-1.onrender.com/', // Altere para o URL do seu frontend
    methods: 'GET,POST,PATCH,PUT,DELETE',
    // allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
}
void bootstrap();
