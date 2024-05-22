import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  await app.listen(3000);
}

bootstrap().catch((error: unknown) => {
  console.error("Error starting the server: ", error);
});  
