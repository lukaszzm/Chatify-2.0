import { forwardRef, Module } from "@nestjs/common";

import { AuthModule } from "@/auth/auth.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { UploadModule } from "@/upload/upload.module";
import { UsersResolver } from "@/users/users.resolver";
import { UsersService } from "@/users/users.service";

@Module({
  imports: [PrismaModule, UploadModule, forwardRef(() => AuthModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
