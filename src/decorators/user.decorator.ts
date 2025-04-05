import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
// The above code defines a custom decorator called `User` that extracts the user object from the request in a NestJS application. It uses the `createParamDecorator` function to create a decorator that can be used in route handlers to access the authenticated user's information. The decorator retrieves the user object from the request context and returns it, allowing you to easily access the user data in your controller methods.
// This is particularly useful in scenarios where you have authentication middleware or guards that populate the request object with user information, such as when using JWT authentication. By using this decorator, you can simplify the process of accessing user data in your route handlers, making your code cleaner and more maintainable.
