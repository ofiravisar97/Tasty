import { z } from "zod";

const ProfileDataSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  isFollowing: z.boolean(),
  followersCount: z.number().int(),
  recipesCount: z.number().int(),
  bookmarksCount: z.number().int(),
  bio: z.string(),
  avatarURL: z.string().url(),
  isMe: z.boolean(),
});

export type ProfileDataType = z.infer<typeof ProfileDataSchema>;
