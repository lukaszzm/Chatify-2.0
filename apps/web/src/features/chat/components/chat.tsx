import { Container, ErrorComponent, NotFoundComponent } from "@chatify/ui";

import { ChatBox } from "@/features/chat/components/chat-box";
import { ChatHeader } from "@/features/chat/components/chat-header";
import { ChatLoading } from "@/features/chat/components/chat-loading";
import { SendMessageForm } from "@/features/chat/components/send-message-form";
import { ChatProvider } from "@/features/chat/contexts/chat-context";
import { useChatQuery } from "@/features/chat/hooks/use-chat-query";
import type { Chat as GqlChat } from "@/generated/graphql";

type ChatProps = Pick<GqlChat, "id">;

export const Chat = ({ id }: ChatProps) => {
  const { data, fetching, error } = useChatQuery(id);

  if (fetching) {
    return <ChatLoading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  if (!data) {
    return <NotFoundComponent text="Chat not found" />;
  }

  return (
    <ChatProvider chat={data}>
      <Container className="flex flex-col">
        <ChatHeader />
        <ChatBox />
        <SendMessageForm />
      </Container>
    </ChatProvider>
  );
};
