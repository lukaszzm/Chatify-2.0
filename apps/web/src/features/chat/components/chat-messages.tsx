import { ErrorComponent } from "@chatify/ui";

import { ChatMessagesLoading } from "@/features/chat/components/chat-messages-loading";
import { ChatMessagesWrapper } from "@/features/chat/components/chat-messages-wrapper";
import { useChat } from "@/features/chat/hooks/use-chat";
import { useMessagesSubscription } from "@/features/chat/hooks/use-messages-subscription";

export const ChatMessages = () => {
  const { id } = useChat();
  const [{ fetching, data, error }] = useMessagesSubscription(id);

  if (fetching) {
    return <ChatMessagesLoading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  if (!data?.messages || data.messages.edges.length === 0) {
    return (
      <p className="mb-auto text-center text-sm text-muted-foreground">
        You don&apos;t have any messages in this conversation yet.
      </p>
    );
  }

  return <ChatMessagesWrapper messages={data.messages} />;
};
