import { createParamDecorator, type ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import type { User } from "@prisma/client";

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): User => {
    if (context.getType() === "http") {
      return context.switchToHttp().getRequest().user;
    }

    const context_ = GqlExecutionContext.create(context);
    const { req, connection } = context_.getContext();

    return connection ? connection.user : req.user;
  }
);
