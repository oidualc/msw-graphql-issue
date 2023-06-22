import { rest } from "msw";

export const handlers = [
  rest.get("/api", (_, res, ctx) => {
    return res(ctx.json({ message: "Hello World" }));
  }),
];
