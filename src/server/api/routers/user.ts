import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userRouter = createTRPCRouter({
  /**
   * add a new user
   */
  //   addUser: publicProcedure.input(userSchema).mutation(({ input, ctx }) => {
  //     return ctx.db.user.create({
  //       data: {
  //         name: input.name,
  //         email: input.email,
  //         password: input.password,
  //       },
  //     });
  //   }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
