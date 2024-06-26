import type { User } from "@chatify/db";
import { createParamDecorator, type ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): User => {
    if (context.getType() === "http") {
      return context.switchToHttp().getRequest().user;
    }

    const context_ = GqlExecutionContext.create(context);
    return context_.getContext().req.user;
  }
);
