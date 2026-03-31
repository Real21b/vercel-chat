import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';
import { RATE_LIMITS } from '@/lib/constants';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: RATE_LIMITS.guestMaxMessagesPerDay,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning'],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: RATE_LIMITS.regularMaxMessagesPerDay,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning'],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
