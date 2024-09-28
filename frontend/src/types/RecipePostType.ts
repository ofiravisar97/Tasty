import { z } from "zod";

export const RecipePostDataSchema = z.object({
  id: z.string().uuid(),
  imageURL: z.string().url(),
  title: z.string(),
  createdAt: z.string(),
  likesCount: z.number().int(),
  messagesCount: z.number().int(),
  avatarURL: z.string().url(),
  userId: z.string().uuid(),
  username: z.string(),
});

export type RecipePostDataType = z.infer<typeof RecipePostDataSchema>;
