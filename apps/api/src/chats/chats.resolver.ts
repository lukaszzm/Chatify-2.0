import type { User } from "@chatify/db";
import { UseGuards } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { CurrentUser } from "@/auth/decorators/current-user.decorator";
import { GqlAuthGuard } from "@/auth/guards/gql-auth.guard";
import { ChatsService } from "@/chats/chats.service";
import { Chat } from "@/chats/models/chat.model";
import { MessagesService } from "@/messages/messages.service";
import { UsersService } from "@/users/users.service";

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(
    private readonly chatsService: ChatsService,
    private readonly usersService: UsersService,
    private readonly messagesService: MessagesService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Chat)
  async chat(
    @Args("chatId", { type: () => String }) chatId: string,
    @CurrentUser() me: User
  ) {
    return this.chatsService.findOneById(chatId, me.id);
  }

  @ResolveField()
  async participants(@Parent() chat: Chat) {
    return this.usersService.findManyByChat(chat.id);
  }

  @ResolveField()
  async messages(@Parent() chat: Chat) {
    return this.messagesService.findMany(chat.id);
  }
}
