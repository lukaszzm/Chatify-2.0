import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module, UnauthorizedException } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import path from "path";

import { AuthModule } from "@/auth/auth.module";
import { AuthService } from "@/auth/auth.service";
import { ChatsModule } from "@/chats/chats.module";
import configuration, { validationSchema } from "@/config/configuration";
import { MessagesModule } from "@/messages/messages.module";
import { NotesModule } from "@/notes/notes.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { PubSubModule } from "@/pubsub/pubsub.module";
import { UsersModule } from "@/users/users.module";

@Module({
  imports: [
    PrismaModule,
    PubSubModule,
    AuthModule,
    UsersModule,
    ChatsModule,
    MessagesModule,
    NotesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [AuthModule],
      driver: ApolloDriver,
      useFactory: async (authService: AuthService) => {
        return {
          introspection: true,
          playground: true,
          autoSchemaFile: path.join(process.cwd(), "src/schema.gql"),
          sortSchema: true,
          subscriptions: {
            "subscriptions-transport-ws": {
              onConnect: async (connectionParams) => {
                const authToken: string = connectionParams.authorization.split(" ")[1];

                if (!authToken) {
                  throw new UnauthorizedException("Missing auth token");
                }

                const user = await authService.getUserFromToken(authToken);

                if (!user) {
                  throw new UnauthorizedException("Invalid auth token");
                }

                return { connection: { user, headers: connectionParams } };
              },
            },
          },
        };
      },
      inject: [AuthService],
    }),
  ],
})
export class AppModule {}
