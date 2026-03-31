import { z } from 'zod';
import { VALIDATION } from '@/lib/constants';

const textPartSchema = z.object({
  type: z.enum(['text']),
  text: z.string().min(1).max(VALIDATION.maxMessageLength),
});

const filePartSchema = z.object({
  type: z.enum(['file']),
  mediaType: z.enum(['image/jpeg', 'image/png', 'image/webp', 'image/gif']),
  name: z.string().min(1).max(VALIDATION.maxFileNameLength),
  url: z.string().url(),
});

const partSchema = z.union([textPartSchema, filePartSchema]);

export const postRequestBodySchema = z.object({
  id: z.string().uuid(),
  message: z.object({
    id: z.string().uuid(),
    role: z.enum(['user']),
    parts: z.array(partSchema).min(1),
  }),
  selectedChatModel: z.enum(['chat-model', 'chat-model-reasoning']),
  selectedVisibilityType: z.enum(['public', 'private']),
});

export type PostRequestBody = z.infer<typeof postRequestBodySchema>;
