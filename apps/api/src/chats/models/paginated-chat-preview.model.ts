import { ObjectType } from "@nestjs/graphql";

import { ChatPreview } from "@/chats/models/chat-preview.model";
import { Paginated } from "@/common/models/paginated.model";

@ObjectType()
export class PaginatedChatPreview extends Paginated(ChatPreview) {}
