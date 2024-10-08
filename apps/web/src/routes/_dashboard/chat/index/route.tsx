import { Container } from "@chatify/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/chat/")({
  component: Page,
});

function Page() {
  return (
    <Container variant="ghost" className="hidden items-center justify-center md:flex">
      <p className="text-center text-muted-foreground">
        Select chat to start conversation.
      </p>
    </Container>
  );
}
