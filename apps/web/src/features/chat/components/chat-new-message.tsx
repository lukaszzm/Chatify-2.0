import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@chatify/ui";
import { Send } from "lucide-react";

import { useNewMessage } from "@/features/chat/hooks/use-new-message";

export const ChatNewMessage = () => {
  const { form, onSubmit } = useNewMessage();

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="px-4 pt-5 border-t border-border flex items-start gap-2 h-24"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1 space-y-0">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Input placeholder="Enter your message..." {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="accent" size="square">
          <Send />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </Form>
  );
};
