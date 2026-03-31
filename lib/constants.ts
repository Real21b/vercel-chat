import { generateDummyPassword } from './db/utils';

export const isProductionEnvironment = process.env.NODE_ENV === 'production';
export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
export const isTestEnvironment = Boolean(
  process.env.PLAYWRIGHT_TEST_BASE_URL ||
    process.env.PLAYWRIGHT ||
    process.env.CI_PLAYWRIGHT,
);

export const guestRegex = /^guest-\d+$/;

export const DUMMY_PASSWORD = generateDummyPassword();

/**
 * Centralized application configuration constants
 */
export const APP_CONFIG = {
  /** Application name used across the site */
  name: 'AI Chatbot',
  /** Application description for SEO */
  description:
    'A powerful AI chatbot built with Next.js and the Vercel AI SDK, featuring multimodal support, persistent chat history, and real-time streaming.',
  /** Base URL for metadata */
  url: 'https://chat.vercel.ai',
} as const;

export const RATE_LIMITS = {
  /** Maximum messages per day for guest users */
  guestMaxMessagesPerDay: Number.parseInt(
    process.env.GUEST_MAX_MESSAGES_PER_DAY || '20',
    10,
  ),
  /** Maximum messages per day for registered users */
  regularMaxMessagesPerDay: Number.parseInt(
    process.env.REGULAR_MAX_MESSAGES_PER_DAY || '100',
    10,
  ),
  /** Window size in hours for rate limit calculation */
  rateLimitWindowHours: 24,
} as const;

export const VALIDATION = {
  /** Minimum password length for registration */
  minPasswordLength: 8,
  /** Maximum text message length */
  maxMessageLength: 2000,
  /** Maximum file name length */
  maxFileNameLength: 100,
  /** Maximum file upload size in bytes (10MB) */
  maxFileSize: 10 * 1024 * 1024,
  /** Allowed image MIME types for upload */
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  /** Maximum chat title length */
  maxTitleLength: 80,
} as const;

export const API_CONFIG = {
  /** Maximum duration for streaming API responses (seconds) */
  maxStreamDuration: 60,
  /** Cache duration for TokenLens catalog (seconds) */
  tokenlensCacheSeconds: 24 * 60 * 60,
  /** Maximum steps for AI tool calls */
  maxToolSteps: 5,
} as const;
